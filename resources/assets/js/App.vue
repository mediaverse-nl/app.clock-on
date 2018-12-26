<template>
    <div>
        <navbar-top></navbar-top>

        <div class="container">
            <router-view></router-view>
        </div>

        <!--<b-card title="Card Title"-->
                <!--img-src="https://picsum.photos/600/300/?image=25"-->
                <!--img-alt="Image"-->
                <!--img-top-->
                <!--tag="article"-->
                <!--style="max-width: 20rem;"-->
                <!--class="mb-2">-->
            <!--<p class="card-text">-->
                <!--Some quick example text to build on the card title and make up the bulk of the card's content.-->
            <!--</p>-->
            <!--<b-button href="#" variant="primary">Go somewhere</b-button>-->
        <!--</b-card>-->

        <!--<b-btn v-b-modal.modal1>Launch demo modal</b-btn>-->

        <!-- Modal Component -->
        <!--<b-modal id="modal1" title="Bootstrap-Vue">-->
            <!--<p class="my-4">Hello from modal!</p>-->
        <!--</b-modal>-->
        <!--<div class="modal" tabindex="-1" role="dialog">-->
            <!--<div class="modal-dialog" role="document">-->
                <!--<div class="modal-content">-->
                    <!--<div class="modal-header">-->
                        <!--<h5 class="modal-title">Modal title</h5>-->
                        <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
                            <!--<span aria-hidden="true">&times;</span>-->
                        <!--</button>-->
                    <!--</div>-->
                    <!--<div class="modal-body">-->
                        <!--<p>Modal body text goes here.</p>-->
                    <!--</div>-->
                    <!--<div class="modal-footer">-->
                        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
                        <!--<button type="button" class="btn btn-primary">Save changes</button>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->

    </div>
</template>

<script>
    import navbarTop from './components/NavbarTop.vue'

    export default {
        components: {
            'navbar-top': navbarTop
        }
    }
</script>

