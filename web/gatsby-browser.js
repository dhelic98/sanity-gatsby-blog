exports.onInitialClientRender = () => {
    // dirty fix for missing popstate listener
    const GATSBY_NAVIGATE = window.___navigate || {}
  
    window.addEventListener('popstate', () =>
      GATSBY_NAVIGATE(window.location.pathname, { replace: true })
    )
}