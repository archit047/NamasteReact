# NamasteReact

# Parcel
 -Dev Build
 -Local Server
 -HMR = Hot Module Replacement
 -file watching algorithm - developed in c++
 -Caching - Faster Builds
 -Image Optimization
 -Minification
 -Bundling
 -Compress
 -Consistent Hashing
 -Code Splitting
 -Differential Bundling - support older browsers
 -Diagnostic
 -Error Handling
 -HTTPS 
 -Tree Shaking - remove unused code
 -Different dev and prod bundles

 /**
 * Header
 *  - logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantsContainer
 *   - RestaurantCard
 *     - Img
 *     - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

 Two types of Export/Import

- Default Export/Import
    export default Component;
    import component from "path";

- Named Export/Import
    export const Component;
    import {Component} from "path";


# React Hooks - hook is a just a normal function
(Normal JS Utility functions)
-useState() - Superpowerful state variables in react
-useEffect()

# useState Hooks 
# const [searchText,setSearchText] = useState();  // return = [variable name, function to update the variable]
want to put your variables sync with the UI -> useState Variables

# useState Hooks - its a normal javascript function
useEffect(() => {
    console.log("render");
  },[]);  

  It has a call back function and declarative array

# empty dependency array => once after render
# dependency array is [searchText] => once after initial render + everytime render (My search text changes)
            
# we will use react testing library and Jest.
<!-- Install react testing library
install jest
configure jest
Installing jest environment jsdom
Create my first test 
Configure our babel with jest
wrote expect sum test 
gitignore coverage report-->
