# Web-based-IT-Project-reading-tracker

The application is deployed from npm start from the front-end. 

ChatGPT was utilized as a debugger, to understand error messages, and to ask questions about formatting certain code. 
Examples of prompts are code segments that had syntax or logical errors and error messages,
they are listed below:


  log error on npm enotent

  
  npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open 'C:\Users\caitl\my-app\package.json'


   <nav className="taskbar">
          <ul>
            <li><a href="/App.js">Library</a></li>
            <li><a href="/Stats.js">Stats</a></li>
            <li><a href="/Friends.js">Friends</a></li>
            <li><a href="/Profile.js">Profile</a></li>
          </ul>
        </nav>
</h1>

export 'Switch' (imported as 'Switch') was not found in 'react-router-dom' (possible exports: Await, BrowserRouter, Form, HashRouter, HydratedRouter, IDLE_BLOCKER, IDLE_FETCHER, IDLE_NAVIGATION, Link, Links, MemoryRouter, Meta, NavLink, Navigate, NavigationType, Outlet, PrefetchPageLinks, Route, Router, RouterProvider, Routes, Scripts, ScrollRestoration, ServerRouter, StaticRouter, StaticRouterProvider, UNSAFE_DataRouterContext, UNSAFE_DataRouterStateContext, UNSAFE_ErrorResponseImpl, UNSAFE_FetchersContext, UNSAFE_FrameworkContext, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RemixErrorBoundary, UNSAFE_RouteContext, UNSAFE_ServerMode, UNSAFE_SingleFetchRedirectSymbol, UNSAFE_ViewTransitionContext, UNSAFE_createBrowserHistory, UNSAFE_createClientRoutes, UNSAFE_createClientRoutesWithHMRRevalidationOptOut, UNSAFE_createRouter, UNSAFE_decodeViaTurboStream, UNSAFE_deserializeErrors, UNSAFE_getPatchRoutesOnNavigationFunction, UNSAFE_getSingleFetchDataStrategy, UNSAFE_invariant, UNSAFE_mapRouteProperties, UNSAFE_shouldHydrateRouteLoader, UNSAFE_useFogOFWarDiscovery, UNSAFE_useScrollRestoration, createBrowserRouter, createCookie, createCookieSessionStorage, createHashRouter, createMemoryRouter, createMemorySessionStorage, createPath, createRequestHandler, createRoutesFromChildren, createRoutesFromElements, createRoutesStub, createSearchParams, createSession, createSessionStorage, createStaticHandler, createStaticRouter, data, generatePath, href, isCookie, isRouteErrorResponse, isSession, matchPath, matchRoutes, parsePath, redirect, redirectDocument, renderMatches, replace, resolvePath, unstable_HistoryRouter, unstable_RouterContextProvider, unstable_createContext, unstable_setDevServerHooks, unstable_usePrompt, useActionData, useAsyncError, useAsyncValue, useBeforeUnload, useBlocker, useFetcher, useFetchers, useFormAction, useHref, useInRouterContext, useLinkClickHandler, useLoaderData, useLocation, useMatch, useMatches, useNavigate, useNavigation, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRevalidator, useRouteError, useRouteLoaderData, useRoutes, useSearchParams, useSubmit, useViewTransitionState)



node:internal/modules/package_json_reader:268
  throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath(base), null);
        ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'node-fetch' imported from c:\Users\caitl\my-app\my-app-backend\src\index.js
    at Object.getPackageJSONURL (node:internal/modules/package_json_reader:268:9)
    at packageResolve (node:internal/modules/esm/resolve:768:81)
    at moduleResolve (node:internal/modules/esm/resolve:854:18)
    at defaultResolve (node:internal/modules/esm/resolve:984:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:634:25)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:617:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:273:38)       
    at ModuleJob._link (node:internal/modules/esm/module_job:135:49) {
  code: 'ERR_MODULE_NOT_FOUND'
}

Node.js v22.14.0


Cannot GET /api/books


app.get('/api-search-test', (req, res) => {
  let search = "flowers"
  let books = fetch(https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&key=AIzaSyD0hgDfU4VAnUhHxRUBUW16zxW7Pb9pMsY)
  .then(response => response.json())
  .then(result => {
  res.send(result)
  })


  
