<template>


    <b-navbar toggleable="md" type="dark" variant="dark">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <router-link :to="{ name: 'dashboard' }" class="nav-link">Dashboard</router-link>
                <router-link :to="{ name: 'schedule' }" class="nav-link">Rooster</router-link>
            </b-navbar-nav>

            <!--&lt;!&ndash; Right aligned nav items &ndash;&gt;-->
            <!--<b-navbar-nav class="ml-auto">-->

                <!--<b-nav-item-dropdown right>-->
                    <!--&lt;!&ndash; Using button-content slot &ndash;&gt;-->
                    <!--<template slot="button-content">-->
                        <!--<em>User</em>-->
                    <!--</template>-->
                    <!--<b-dropdown-item href="#">Profile</b-dropdown-item>-->
                    <!--<b-dropdown-item href="#">Signout</b-dropdown-item>-->
                <!--</b-nav-item-dropdown>-->
            <!--</b-navbar-nav>-->

        </b-collapse>
    </b-navbar>

    <!--<nav class="navbar navbar-default navbar-static-top">-->
        <!--<div class="container">-->
            <!--<div class="navbar-header">-->

                <!--&lt;!&ndash; Collapsed Hamburger &ndash;&gt;-->
                <!--<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">-->
                    <!--<span class="sr-only">Toggle Navigation</span>-->
                    <!--<span class="icon-bar"></span>-->
                    <!--<span class="icon-bar"></span>-->
                    <!--<span class="icon-bar"></span>-->
                <!--</button>-->

                 <!--&lt;!&ndash;Branding Image&ndash;&gt;-->
                <!--<a class="navbar-brand" href="">-->
                    <!--<router-link :to="{ name: 'dashboard' }">Dashboard</router-link>-->
                <!--</a>-->
            <!--</div>-->

            <!--<div class="collapse navbar-collapse" id="app-navbar-collapse">-->
                <!--&lt;!&ndash; Left Side Of Navbar &ndash;&gt;-->
                <!--<ul class="nav navbar-nav">-->
                    <!--&lt;!&ndash;&nbsp;                      <li><a href="{{ route('login') }}">Login</a></li>&ndash;&gt;-->
                    <!--<li>-->
                        <!--<router-link :to="{ name: 'dashboard' }">Dashboard</router-link>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<router-link :to="{ name: 'schedule' }">Rooster</router-link>-->
                    <!--</li>-->
                <!--</ul>-->

                <!--&lt;!&ndash; Right Side Of Navbar &ndash;&gt;-->
                <!--&lt;!&ndash;<ul class="nav navbar-nav navbar-right">&ndash;&gt;-->
                    <!--&lt;!&ndash;&lt;!&ndash; Authentication Links &ndash;&gt;&ndash;&gt;-->
                    <!--&lt;!&ndash;&lt;!&ndash;@if (Auth::guest())&ndash;&gt;&ndash;&gt;-->

                    <!--&lt;!&ndash;<li><a href="/">Register</a></li>&ndash;&gt;-->
                    <!--&lt;!&ndash;&lt;!&ndash;@else&ndash;&gt;&ndash;&gt;-->
                    <!--&lt;!&ndash;<li class="dropdown">&ndash;&gt;-->
                        <!--&lt;!&ndash;<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">&ndash;&gt;-->
                             <!--&lt;!&ndash;asdas<span class="caret"></span>&ndash;&gt;-->
                        <!--&lt;!&ndash;</a>&ndash;&gt;-->

                        <!--&lt;!&ndash;<ul class="dropdown-menu" role="menu">&ndash;&gt;-->
                            <!--&lt;!&ndash;<li>&ndash;&gt;-->
                                <!--&lt;!&ndash;<a href="/">asd</a>&ndash;&gt;-->
                            <!--&lt;!&ndash;</li>&ndash;&gt;-->
                        <!--&lt;!&ndash;</ul>&ndash;&gt;-->
                    <!--&lt;!&ndash;</li>&ndash;&gt;-->
                    <!--&lt;!&ndash;&lt;!&ndash;@endif&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;</ul>&ndash;&gt;-->
            <!--</div>-->
        <!--</div>-->
    <!--</nav>-->
</template>

<script>
    export default {}
</script>