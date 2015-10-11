var Demo = React.createClass({
	render: function() {
		return (
			<div class="container">
				<h1>React.js Radio Group Demo</h1>
				
				<form>
					<p class="h3">How did you hear about us?</p>
					<RadioOption value="newspaper">Newspaper</RadioOption>
					<RadioOption value="radio">Radio</RadioOption>
					<RadioOption value="tv">Television</RadioOption>
					<RadioOption value="search">Search Engine</RadioOption>
					<RadioOption value="social">Social Media</RadioOption>
					<RadioOtherOption />
					<p><input type="submit"/></p>
				</form>
			</div>

			);
	}
});