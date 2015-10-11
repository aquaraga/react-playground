var RadioOption = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		value: React.PropTypes.string.isRequired,
		children: React.PropTypes.node
	},
	render: function() {
		return(
			<p class="radio">
				<label>
					<input type="radio" name="{this.props.name}" value={this.props.value}/>
					{this.props.children}
				</label>
			</p>
			);
	}
});