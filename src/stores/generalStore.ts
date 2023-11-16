import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useGeneralStore = defineStore("general", () => {
    const token = useLocalStorage("trello_token", ref<string>());
    const user = useLocalStorage("trello_user", ref<Record<string, any>>({}));

    return {
        token,
        user,
    };
});
