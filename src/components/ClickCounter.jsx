var ClickCounter = React.createClass({
	getInitialState: function() {
		return {
			count: 0
		};
	},
	onClick: function() {
		console.log('Clicked');
		this.setState({count: this.state.count + 1});
	},
	render: function() {
		return (
			<div>
				<span onClick={this.onClick} ref="clickText">{this.state.count} clicks</span>
			</div>
			);
	}
});