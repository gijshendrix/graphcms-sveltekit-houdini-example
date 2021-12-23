<script>
  import { query, graphql, componentQuery } from '$houdini';
  import Banner from '../components/Banner.svelte';
  import Text from '../components/Text.svelte';
  import Testimonial from '../components/Testimonial.svelte';

  export let graphcms_id;

  const { data, loading } = query(graphql`
      query Slot ($id : ID) { 
        slot (where: {id: $id }) { 
            title
            components {
              __typename
              ... on BannerComponent {
                ...BannerFragment
              }
              ... on TextComponent {
                ...TextFragment
              }
              ... on TestimonialComponent {
                ...TestimonialFragment
              }              
            }
          } 
      }
  `)
</script>

<script context="module">
  // This is the variables function for the Slot query.
  // Query variable functions must be named <QueryName>Variables.
  // See Houdini docs
  export function SlotVariables(page) {
      return {
        id: page.props.graphcms_id,
      }
  }
</script>

<div>
  <h2>Slot id: {graphcms_id}</h2>

  {#if !$loading}
    {#each $data.slot.components as component }
      {#if component.__typename == "BannerComponent"}
        <Banner props={component} />
      {:else if component.__typename == "TextComponent"}  
        <Text props={component} />
      {:else if component.__typename == "TestimonialComponent"}  
        <Testimonial props={component} />
      {/if}
    {/each} 
  {/if}
</div>

<style>
  div {
    border: 1px solid;
    padding: 5px;
  }
</style>