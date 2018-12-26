<template>
    <div>
        <h1>Dashboard</h1>

        <div>
            <!-- Using modifiers -->
            <b-btn v-b-modal.myModal>Show Modal</b-btn>

            <!-- Using value -->
            <b-btn v-b-modal="'myModal'">Show Modal</b-btn>

            <!-- the modal -->
            <b-modal id="myModal">
                Hello From My Modal!
            </b-modal>
        </div>

        <modal v-if="showModal">
            <h3 slot="header" class="modal-title">
                Modal title
            </h3>
            <div slot="body">
                asdasd
            </div>
            <div slot="footer">
                <button type="button" class="btn btn-outline-info" @click="closeModal()"> Close </button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="submitAndClose()">
                    Submit
                </button>
            </div>
        </modal>
        <button type="button" class="btn btn-primary" @click="openModal()">Open Modal</button>

        <!--<template>-->
        <p>Dashboard</p>
        <!--</template>-->
    </div>
</template>

<script>

    // import Modal from '../components/Modal'

    export default {
        components: {
            // Modal
        },
        data() {
            return {
                showModal: false
            }
        },
        methods: {
            openModal() {
                this.showModal = true;
            },
            closeModal() {
                this.showModal = false;
            },
        },
        mounted () {
            this.$axios.get('https://api.github.com/users/benjamingeorge')
                .then(function (res) {
                    console.log(res.data);
                })
                .catch(function(res) {
                    if(res instanceof Error) {
                        console.log(res.message);
                    } else {
                        console.log(res.data);
                    }
                });
        }
    }
</script>