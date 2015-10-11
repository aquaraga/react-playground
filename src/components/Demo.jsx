var Demo = React.createClass({
	render: function() {
		var options = [
			{value: 'newspaper', label: 'Newspaper'},
			{value: 'radio', label: 'Radio'},
			{value: 'tv', label: 'Television'},
			{value: 'search', label: 'Search Engine'},
			{value: 'social', label: 'Social Media'}
		];
		return (
			<div class="container">
				<h1>React.js Radio Group Demo</h1>
				
				<form>
					<p class="h3">How did you hear about us?</p>
						<RadioOptionGroup other={false} options={options} />
					<p><input type="submit"/></p>
				</form>
			</div>

			);
	}
});