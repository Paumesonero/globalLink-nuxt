<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>
<template>
    <div class="bg-zinc-900">
        <v-layout class="bg-zinc-900">
            <div>
                <Icon color="white" @click.stop="drawer = !drawer" name="material-symbols:menu-rounded" size="3rem" />
            </div>
            <v-navigation-drawer v-model="drawer" location="bottom" temporary color="rgb(24 24 27)">
                <div class=" flex flex-col justify-center align-center gap-4 mt-5">
                    <NuxtLink class="text-xl text-slate-50 " active-class="border-b-2 border-purple-700" to="/">Home
                    </NuxtLink>
                    <NuxtLink class="text-xl text-slate-50 " active-class="border-b-2 border-rose-700" to="/news">News
                    </NuxtLink>
                    <NuxtLink class="text-xl text-slate-50 " active-class="border-b-2 border-yellow-300" to="/sports">Sports
                    </NuxtLink>
                    <NuxtLink class="text-xl text-slate-50 " active-class="border-b-2 border-emerald-500" to="/travel">
                        Travel</NuxtLink>
                    <NuxtLink class="text-xl text-slate-50 " active-class="border-b-2 border-blue-700" to="/future">Future
                    </NuxtLink>
                </div>

            </v-navigation-drawer>
        </v-layout>
    </div>
</template>