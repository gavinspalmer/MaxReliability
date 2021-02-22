// https://www.digitalocean.com/community/tutorials/how-to-build-custom-pagination-with-react

import React, { Component, Fragment } from 'react';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to) => {
    let i = from;
    const range = [];
    while (i <= to) {
        range.push(i);
        i++;
    }
    return range;
}

class SamplePagination extends Component {
    constructor(props) {
        super(props);

        const numberOfComponents = typeof numberOfComponents === 'number' ? numberOfComponents : 0;
        const componentNeighbours = typeof componentNeighbours === 'number' ? Math.max(0, Math.min(componentNeighbours, 2)) : 0;
        this.state = {currentPage: 1};
    }

    componentPageNumbers = () => {
        //const numberOfComponents = this.numberOfComponents;
        const currentPage = this.state.currentPage;
        const componentNeighbours = this.componentNeighbours;
        const totalNumbers = (this.componentNeighbours * 2) + 3;
        const totalBlocks = totalNumbers + 2;
    
        if (numberOfComponents > totalBlocks) {
            const startPage = Math.max(2, currentPage - componentNeighbours);
            const endPage = Math.min(numberOfComponents - 1, currentPage + componentNeighbours);
            let pages = range(startPage, endPage);
    
            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (numberOfComponents - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);
    
            switch (true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                  const extraPages = range(startPage - spillOffset, startPage - 1);
                  pages = [LEFT_PAGE, ...extraPages, ...pages];
                  break;
                }
        
                // handle: (1) {2 3} [4] {5 6} > (10)
                case (!hasLeftSpill && hasRightSpill): {
                  const extraPages = range(endPage + 1, endPage + spillOffset);
                  pages = [...pages, ...extraPages, RIGHT_PAGE];
                  break;
                }
        
                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                  pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                  break;
                }
            }
        
            return [1, ...pages, numberOfComponents];
        }      
    }

    render() {
        if (!this.numberOfComponents) return null;
        const { currentPage } = this.state;
        const pages = this.componentPageNumbers();
        return (
            <Fragment>
              <nav aria-label="Equipment Pagination">
                <ul className="pagination">
                  { pages.map((page, index) => {
      
                    if (page === LEFT_PAGE) return (
                      <li key={index} className="page-item">
                        <a className="page-link" href="#" aria-label="Previous" onClick={this.handleMoveLeft}>
                          <span aria-hidden="true">&laquo;</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                    );
      
                    if (page === RIGHT_PAGE) return (
                      <li key={index} className="page-item">
                        <a className="page-link" href="#" aria-label="Next" onClick={this.handleMoveRight}>
                          <span aria-hidden="true">&raquo;</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    );
      
                    return (
                      <li key={index} className={`page-item${ currentPage === page ? ' active' : ''}`}>
                        <a className="page-link" href="#" onClick={ this.handleClick(page) }>{ page }</a>
                      </li>
                    );
      
                  }) }
      
                </ul>
              </nav>
            </Fragment>
        );
    }

    componentDidMount() {
        this.gotoPage(1);
    }

    gotoPage = page => {
        const { onPageChanged = f => f } = this.props;
        const currentPage = Math.max(0, Math.min(page, this.totalPages));
        const paginationData = {
            currentPage,
            numberOfComponents: this.numberOfComponents,

        };
        this.setState({currentPage}, () => onPageChanged(paginationData));
    }

    handleClick = page => evt => {
        evt.preventDefault();
        this.gotoPage(page);
    }

    handleMoveLeft = evt => {
        evt.preventDefault();
        this.gotoPage(this.state.currentPage - (this.pageNeighbours * 2) - 1);

    }

    handleMoveRight = evt => {
        evt.preventDefault();
        this.gotoPage(this.state.currentPage + (this.pageNeighbours * 2) + 1);
    }
}

/*
EquipmentPagination.propTypes = {
    numberOfComponents: propTypes.number.isRequired,
    componentNeighbours: PropTypes.number,
    onPageChanged: PropTypes.func
};*/

export default SamplePagination;