<template>
    <div id="layout-wrapper">
        <page-header></page-header>
        <side-bar></side-bar>
        <div class="main-content">
            <div class="page-content">
                <div class="container-fluid">
                    <router-view></router-view>
                </div>
                <app-footer></app-footer>
            </div>
        </div>
        <app-fixed></app-fixed>
    </div>
</template>

<script>
    import Header from './shared/header';
    import SideBar from './shared/sidebar';
    import Footer from './shared/footer';
    import Fixed from './shared/fixed';
    export default {
        components: {
            'page-header': Header,
            'side-bar': SideBar,
            'app-footer': Footer,
            'app-fixed': Fixed,
        },
        data() {
            return {}
        },
        methods: {
            
        },
        mounted() {
        },
        watch: {
        },
    }
</script>