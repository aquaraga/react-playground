var RadioOption = React.createClass({
	render: function() {
		return(
			<p class="radio">
				<label>
					<input type="radio" name="referrer" value={this.props.value}/>
					{this.props.children}
				</label>
			</p>
			);
	}
});