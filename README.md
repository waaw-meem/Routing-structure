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

# Redirect and Wildcards Routes




# An Introduction of Guards
