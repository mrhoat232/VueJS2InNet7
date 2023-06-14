<template>

    <div class="app-menu navbar-menu">
        <!-- LOGO -->
        <div class="navbar-brand-box">
            <!-- Dark Logo-->
            <router-link to="/" class="logo logo-dark">
                <span class="logo-sm">
                    <img src="/assets/images/logo-sm.png" alt="" height="22">
                </span>
                <span class="logo-lg">
                    <img src="/assets/images/logo-dark.png" alt="" height="22">
                </span>
            </router-link>
            <!-- Light Logo-->
            <router-link to="/" class="logo logo-light">
                <span class="logo-sm">
                    <img src="/assets/images/logo-sm.png" alt="" height="22">
                </span>
                <span class="logo-lg">
                    <img src="/assets/images/logo-light.png" alt="" height="22">
                </span>
            </router-link>
            <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                <i class="ri-record-circle-line"></i>
            </button>
        </div>


        <div id="scrollbar">
            <div class="container-fluid">

                <div id="two-column-menu">
                </div>
                <ul class="navbar-nav" id="navbar-nav">
                    <li class="menu-title d-md-none text-center" @click="clickCollapeSidebar">
                        <span data-key="t-collape-menu"><i class="mdi mdi-chevron-double-left text-muted fs-16" style="display: block"></i> </span>
                    </li>
                    <li class="menu-title"><span data-key="t-menu">Title 1</span></li>
                    <li class="nav-item">
                        <a class="nav-link menu-link" href="#sidebarMenu1" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMenu1">
                            <i class="mdi mdi-view-grid-plus-outline"></i> <span data-key="t-dashboards">Menu 1</span>
                        </a>
                        <div class="collapse menu-dropdown" id="sidebarMenu1">
                            <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <router-link to="/menu-2-1" class="nav-link" data-key="t-sell-tabs"> Menu Level 2 - 1  </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/menu-2-2" class="nav-link" data-key="t-sell-retail"> Menu Level 2 - 2 </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/menu-2-3" class="nav-link" data-key="t-sell-bill"> Menu Level 2 - 3 </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/menu-2-4" class="nav-link" data-key="t-sell-handbook"> Menu Level 2 - 4 </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu-link" href="#sidebarMenu2" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMenu2">
                            <i class="mdi mdi-view-carousel-outline"></i> <span data-key="t-dashboards">Menu 2</span>
                        </a>
                        <div class="collapse menu-dropdown" id="sidebarMenu2">
                            <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <router-link to="/menu-2-1" class="nav-link" data-key="t-sell-tabs"> Menu Level 2 - 1  </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/menu-2-2" class="nav-link" data-key="t-sell-retail"> Menu Level 2 - 2 </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/menu-2-3" class="nav-link" data-key="t-sell-bill"> Menu Level 2 - 3 </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/menu-2-4" class="nav-link" data-key="t-sell-handbook"> Menu Level 2 - 4 </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-title"><span data-key="t-menu">Title 2</span></li>
                    <li class="nav-item">
                        <a class="nav-link menu-link" href="#sidebarMenu3" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMenu3">
                            <i class="mdi mdi-speedometer"></i> <span data-key="t-dashboards">Menu 3</span>
                        </a>
                        <div class="collapse menu-dropdown" id="sidebarMenu3">
                            <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <router-link to="/menu-2-1" class="nav-link" data-key="t-sell-tabs"> Menu Level 2 - 1  </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/menu-2-2" class="nav-link" data-key="t-sell-retail"> Menu Level 2 - 2 </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/menu-2-3" class="nav-link" data-key="t-sell-bill"> Menu Level 2 - 3 </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/menu-2-4" class="nav-link" data-key="t-sell-handbook"> Menu Level 2 - 4 </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
            <!-- Sidebar -->
        </div>

        <div class="sidebar-background"></div>
    </div>
</template>
<script>
    export default {
        components: {
        },
        data() {
            return {
                IsLoading: false,
            }
        },
        mounted() {
        },
        methods: {
            clickCollapeSidebar() {
                const el = document.body;
                el.classList.remove('vertical-sidebar-enable');
            }
        },
        watch: {


        },
        created() {

        }
    }
</script>