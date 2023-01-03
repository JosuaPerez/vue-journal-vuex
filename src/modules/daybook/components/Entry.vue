<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 10 } })"
    >
        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">23</span>
            <span class="mx-1 fs-5">diciembre</span>
            <span class="mx-2 fw-light">2022, viernes</span>
        </div>

        <div class="entry-description">
            Irure elit est tempor voluptate ullamco commodo anim. Est aute fugiat officia enim reprehenderit dolor ut. Ea et consectetur esse aliquip duis enim consectetur occaecat eu laborum ullamco proident quis labore. Ullamco fugiat aliqua dolore nostrud consequat labore exercitation. Eu ex fugiat labore fugiat non excepteur amet anim non ad in duis pariatur labore. Sint anim nisi sint proident dolore tempor qui laborum laborum dolor commodo anim ullamco est. Laborum proident ad culpa consequat.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
    .entry-description {
        font-size: 12px;
    }
}


</style>