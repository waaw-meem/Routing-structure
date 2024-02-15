# Introduction of Routing
It will help to move from one page to another page (navigation)

# How to use Routing? How to implement Routing?
Step 01: Import "Routes" and "RouterModule" from "@angular/router"

Step 02: Create a const variable to assign a routing in that variable such as:

const appRoutes: Routes = [
    {path:'users',component:'UserComponent'}
]

Step 03: Now Add "RouterModule" in imports with this statement "RouterModule.forRoot(appRoutes)"

# How we know that at which place we render content of menu?
Just Add this tag to load the content of component "<router-outlet></router-outlet>"

# Navigation with Router Links

Instead of "href" attribute we use "routerLink="/servers" or "[routerLink]="['/servers']""
The second method is used to routing for multiple pages in which it shows different things according to the code or ID

# Path

Relative path => "servers" and Absolute Path => './servers'

# Styling Active Router Links

To create a menu active add this property "routerLinkActive='active'" in all "li" tag
and add one thing more to start active from Home or main page include this as well 
"routerLinkActiveOptions={exact:true}"

# Navigating Program way

If you are moving from one html page to another then you will have to add click event then go to typescript file to create click event function with importing "Router" package and add in constructor

constructor(private router:Router)

and In function add this code

"this.router.navigate(['/servers'])"

# Relative and Absolute Path

First thing is relative path give error with routerLink but it does not give any error with navigate method because it does not know at which current route the user is present so for that purpose we add "ActivatedRoute" package in Navigate method for Angular ot understand that where user is currently reside

Important give absolute path except root path

# Passing Parameters to Routes and Fetching Router Parameters

If a developer wants a some specific path route with having parameters such as 
<code>{path:'users/:id/:name',component:UserComponent}</code>

Now the main thing when developer thing how we can access the URL or data? after writing parameters.

Then developer use this code.

In Angular, a snapshot refers to the state of a route at a specific moment in time. When you navigate to a particular route in an Angular application, you can access information about that route's state through the ActivatedRouteSnapshot object.

snapshot: The snapshot property of ActivatedRoute provides a static snapshot of the current route information. It represents the state of the route at the moment it was activated.

params: The params property of the snapshot holds the route parameters extracted from the URL. These parameters are usually specified in the route configuration.

['id']: Accesses the value of the route parameter named 'id'. This could be any parameter defined in the route configuration, but here specifically, it's looking for a parameter named 'id'.

<code>
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    }
  }
</code>


# Fetching Route Parameters Reactively Important

## Snapshot Method:

Use the snapshot method when you only need to fetch route parameters once, and you're confident that these parameters won't change while the component is active. This method is suitable for scenarios where the route parameters are static or won't be updated dynamically during the component's lifecycle.

Suppose you have a route that navigates to a user profile page, and the user ID is passed as a route parameter. If you're certain that the user ID won't change while the user profile component is active, you can use the snapshot method to fetch the user ID when the component is initialized.


## Observable Subscribe:

Use Observable subscribe when you need to reactively fetch route parameters and handle dynamic changes to these parameters during the component's lifecycle. This method is suitable for scenarios where route parameters may change, and you want your component to reactively update based on these changes.

Example:
Suppose you have a route that allows users to filter products by category, and the category ID is passed as a route parameter. If you want your component to update the product list whenever the category changes, you can use Observable subscribe to reactively fetch the category ID.


## Passing Query Parameters and Fragments

Example of Query and Fragments Parameters 
<p>localhost:4000/users/1/edit?allowEdit=1#loading</p>
<strong><i>Fragment is this "#loading"</i></strong>
<strong><i>Query is this "?allowEdit=1"</i></strong>

To add the query parameters there are two ways to do this first method is with "routerLink"
such as:

<code>

<a
[routerLink]="['/servers',5,'edit']"
[queryParams]="{'allowEdit':1}"
[fragment]="'loading'"
class="list-group-item"
*ngFor="let server of servers">
{{ server.name }}
</a>

Now loading Router by navigate method


this.router.navigate(['/servers',id,'edit'],
{queryParams:{allowEdit:1},fragment:'loading'})
</code>

## Retrieving Query Parameters and Fragments

Just like params we have other observable as well or function we can say
<code>
this.route.params
.subscribe(
    (params:Params) => {
    this.user.id = params['id']
    this.user.name = params['name']
    }
)
</code>

We have this facility as well
<code>
this.route.fragment
.subscribe(

)

this.route.queryParams
.subscribe(
 
)
</code>

# Configuring the handling of Query parameters
<code>this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'})</code>

We use queryParamsHandling preserve because we want query parameter in url after clicking on edit button



# An Introduction of Guards (Important)

## canActivate

CanActivate is an interface in Angular used to implement a guard to determine if a route can be activated or not. It's part of the Angular Router's guard feature, which allows you to run some code before a route is activated, enabling you to control access to that route based on certain conditions.

The canActivate() method typically takes two parameters:

ActivatedRouteSnapshot: Represents the route that is being activated. It contains information about the route, such as its URL, parameters, and any data associated with the route.

RouterStateSnapshot: Represents the state of the router at the time the guard is run. It contains information about the current route tree, including the URL, parameters, and the route itself.


## canActivateChild

CanActivateChild is another interface provided by Angular's router guards. It's similar to CanActivate, but it specifically deals with guarding child routes of a particular route.

## Controlling Navigation with canDeactivate


CanDeactivate is an interface provided by Angular's router guards. It allows you to control whether a route can be deactivated or not. When a user navigates away from a route, Angular checks if there's a CanDeactivate guard associated with that route. If there is, Angular invokes the canDeactivate() method of that guard.

### Why we use CanDeactivate:
Confirmation for Navigation: It allows you to prompt users for confirmation before they navigate away from a route, especially if there are unsaved changes on the page.

Validation: It enables you to perform validation checks before allowing navigation, ensuring that the user's input or actions meet certain criteria.

Preventing Unwanted Navigation: It provides a mechanism to prevent users from navigating away from a route under specific conditions, such as during a critical operation or when certain prerequisites haven't been met.

<p>
Explanation of the Provided Code:
The provided code defines an interface CanComponentDeactivated and a guard CanDeactivatedGuard.

CanComponentDeactivated Interface:

This interface defines a contract for components that implement the canDeactivate method.
The canDeactivate method returns an Observable<boolean>, Promise<boolean>, or boolean, indicating whether navigation can proceed (true) or not (false).
Components implementing this interface must provide their own implementation of the canDeactivate method.
CanDeactivatedGuard Class:

This class implements the CanDeactivate interface, specifying the type of component it guards (CanComponentDeactivated).
It defines the canDeactivate method, which is called by Angular's router when determining whether navigation from a route is allowed.
The canDeactivate method receives the component instance (component) along with information about the current route, current state, and next state.
Inside the canDeactivate method, it invokes the canDeactivate method of the component instance (provided it implements the CanComponentDeactivated interface) to determine if navigation should be allowed.
The method returns a boolean, UrlTree, Observable<boolean | UrlTree>, or Promise<boolean | UrlTree>, indicating whether navigation should proceed (true) or not (false), or a URL tree representing the destination if the navigation should be redirected.
</p>

## Passing Static Data to Route

Passing static data to a route is a common practice in Angular applications. It allows you to provide additional information to a component when it's instantiated via routing. There are several reasons why you might want to use this feature:

Configuration Data: You can use static data to pass configuration settings or metadata to a component. This can include information like titles, descriptions, or any other data that the component needs to render itself properly.

Localization: Static data can be used to pass localized strings or labels to a component, allowing it to display content in different languages based on the user's preferences.

Security: Static data can also include security-related information such as user roles or permissions. This data can be used by the component to determine which features or functionalities should be accessible to the user.

Performance: By pre-loading data with the route, you can improve performance by reducing the need for additional HTTP requests or data fetching operations when the component is loaded.

Consistency: Passing static data ensures that the component always receives the same data when it's instantiated via routing, which helps maintain consistency in your application's behavior.

Here's an example of how you can pass static data to a route in Angular:


<code> 
const routes: Routes = [
  { 
    path: 'product/:id', 
    component: ProductComponent, 
    data: { 
      title: 'Product Details', 
      description: 'This page displays details about a product' 
    } 
  }
];


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: string;
  description: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.data.title;
    this.description = this.route.snapshot.data.description;
  }
}


</code>


# Resolving Dynamic Data with the resolve guard

<p>
Resolve guards in Angular are used to fetch data before the route is activated and the component is loaded. They help ensure that the required data is available before the component is rendered, providing a smooth user experience and preventing the component from being displayed with incomplete or missing data. Resolve guards are particularly useful in scenarios where components depend on data that needs to be fetched asynchronously, such as from a server or via a complex computation.

Here are some reasons why we use resolve guards:

Data Pre-loading: Resolve guards allow us to pre-load data before the route is activated, ensuring that the component has access to the required data as soon as it's rendered. This helps avoid delays in displaying the component content and provides a better user experience.

Consistent Data: Resolve guards ensure that the component always receives the same data when it's instantiated via routing. This helps maintain consistency in the application's behavior and prevents unexpected changes in data between different route activations.

Avoiding Race Conditions: Resolve guards help avoid race conditions that can occur when multiple components try to fetch data simultaneously. By resolving data before activating the route, resolve guards ensure that components don't compete for the same data resources.

Error Handling: Resolve guards provide a mechanism for handling errors that occur during data fetching. They allow us to gracefully handle errors, such as failed HTTP requests or data retrieval errors, and provide appropriate feedback to the user.

Performance Optimization: Resolve guards can improve the performance of our application by pre-fetching data that the component will need. By resolving data before activating the route, we can reduce the latency associated with fetching data asynchronously when the component is loaded.

Overall, resolve guards help ensure that our components have access to the required data when they're rendered, providing a seamless user experience and helping to optimize the performance of our Angular applications.
</p>

<code>
export class ServerResolver implements Resolve<Server> {
    constructor(private serverService: ServersService) {}

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<Server> | Promise<Server> | Server {
        const serverId = route.params.id;
        return this.serverService.getServer(serverId);
    }
</code>

Class Definition:

export class ServerResolver implements Resolve<Server> { ... }: This defines the ServerResolver class and specifies that it implements the Resolve<Server> interface. The Resolve interface is provided by Angular's router module and is used to create route resolvers, which resolve data before activating a route.
Constructor:

constructor(private serverService: ServersService) { ... }: This is the class constructor. It accepts an instance of the ServersService class as a parameter and injects it into the ServerResolver class. This allows the resolver to use the ServersService to fetch server data.
Resolve Method:

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server { ... }: This method is part of the Resolve interface and is required to be implemented by classes that implement the interface. It is responsible for resolving data before activating a route.
const serverId = route.params.id;: This extracts the id parameter from the route snapshot. This likely represents the ID of the server whose details need to be fetched.
return this.serverService.getServer(serverId);: This calls the getServer method of the ServersService class to fetch server data based on the serverId. The method returns an Observable, Promise, or server object, depending on the return type specified in the method signature.