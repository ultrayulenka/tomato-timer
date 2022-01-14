import './grid-layout.scss';
import { Row, Col } from 'react-bootstrap';

function GridLayout({rows = 0, col = 0, rowGap = 0, proportions = [], children}) {

        
    return (
        [...Array(rows)].map((item, i) => {
            return (
                <Row key={`row-${i}`}
                    className={rowGap && i < rows - 1? `mb-${rowGap}` : ''}>
                    {
                        [...Array(col)].map((item, j) => {
                            return (
                                <Col key={`col-${j}`}
                                    md={proportions[j]}>
                                    {children[i*col + j]}
                                </Col>
                            )
                        })
                    }
                </Row>
            )
        })
    )
}
  
export default GridLayout;
