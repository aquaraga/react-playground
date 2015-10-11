var RadioOtherOption = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired
	},
	getInitialState: function() {
		return {
			checked: false
		}
	},
	onChange: function(event) {
		var input = event.target;
		this.setState({
			checked: input.checked
		});
	},
	componentWillUpdate: function(prevProps, prevState) {
		var input = this.refs.input.getDOMNode();
		if (prevState.checked !== input.checked) {
			this.setState({
				checked: input.checked
			});
		}
		
	},
	render: function() {
		var name = this.props.name;
		return (
			<p class="form-group radio">
				<label>
					<input ref="input" onChange={this.onChange} type="radio" name={name} value="other"/>
					Other
				</label>
				{this.state.checked && (
					<label class="form-inline">
						&nbsp;Please specify:
						<input type="text" name="referrer_other"/>
					</label>
					)}
			</p>
			);
	}
});