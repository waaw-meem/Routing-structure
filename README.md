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