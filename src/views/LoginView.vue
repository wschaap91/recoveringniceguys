<script setup lang="ts">
    import router from '@/router';
    import { useGeneralStore } from '@/stores/generalStore';
    import { storeToRefs } from 'pinia';

    const store = useGeneralStore();
    const { user } = storeToRefs(store)

    async function authenticationSuccess() {
        const boards = await window.Trello.get('/members/me/boards');
        console.log(boards);
        const rngboard = boards.find((b: any) =>
            b.id === process.env.TRELLO_BOARD_ID
        )

        if (rngboard) {
            user.value = await window.Trello.get('/members/me');
            router.push({ name: 'page' });
        }
    }

    function authenticationFailure() {
        console.log('Failed authentication');
    }

    function login() {
        const tempToken = localStorage.getItem('trello_token');
        if (tempToken === 'undefined') {
            console.log('token undefined');
            localStorage.clear();
        }
        window.Trello.authorize({
            type: 'popup',
            name: 'Recovering Nice Guys',
            success: authenticationSuccess,
            error: authenticationFailure
        });
    }

</script>

<template>
    <div class="login-view">
        <h1>Recovering Nice Guys</h1>
        <p>Log in to Trello to see your meetings and buddies.</p>
        <button @click="login">Log in</button>
    </div>
</template>