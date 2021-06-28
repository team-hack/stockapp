import React from 'react';
import Plot from 'react-plotly.js';

class Stock extends React.Component {
    state = {
        symbol: 'AMZN',
        stockChartXValues: [],
        stockChartYValues: []
    }

    symbolInput = React.createRef();

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const API_KEY = process.env.REACT_APP_ALPHAVANTAGE_API_KEY;
        let StockSymbol = this.state.symbol;
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_Call)
            .then(response => response.json())
            .then(
                (data) => {
                    console.log(data);

                    for (var key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }

                    this.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    });
                }
            )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({symbol: this.symbolInput.current.value}, this.fetchStock);
        this.symbolInput.current.value = '';
    }

    render() {
        const { symbol, stockChartXValues, stockChartYValues } = this.state;
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Symbol"
                        ref={this.symbolInput}
                        required
                    />
                    <button>Get</button>
                </form>
                
                <Plot
                    data={[
                    {
                        x: this.state.stockChartXValues,
                        y: this.state.stockChartYValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    }
                    ]}
                    layout={ {width: 779, height: 419, title: this.state.symbol.toUpperCase()} }
                />
            </>
        )
    }
}

export { Stock };