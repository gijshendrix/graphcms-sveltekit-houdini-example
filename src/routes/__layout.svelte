<script context="module">
  import '../app.css';
  
  import { setEnvironment } from '$houdini'
  import environment from '../environment'
  
  setEnvironment(environment)
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
    <li><a href="/test">Another page</a></li>
	</ul>
</nav>

<main>
	<slot />
</main>

<style>
	main {
		position: relative;
		max-width: 90em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	nav {
		border-bottom: 1px solid lightgray;
		font-weight: 300;
		padding: 0 1em;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}
	li {
		display: block;
		float: left;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>
