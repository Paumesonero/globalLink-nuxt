<template>
    <h1 class=" font-bold text-slate-50 text-2xl text-red-400 pr-7 border-r-2 border-slate-50">GlobalLink</h1>
    <div class="flex justify-around gap-2 w-3/4">
        <NuxtLink to="/" class="text-slate-50 hover:border-b-2 border-slate-50" active-class="border-b-2 border-slate-50">
            Home</NuxtLink>
        <NuxtLink to="/news" class="text-slate-50 hover:border-b-2 border-rose-700"
            active-class="border-b-2 border-rose-700">
            News</NuxtLink>
        <NuxtLink to="/sports" class="text-slate-50 hover:border-b-2 border-yellow-300"
            active-class="border-b-2 border-yellow-300">
            Sports</NuxtLink>
        <NuxtLink to="/travel" class="text-slate-50 hover:border-b-2 border-emerald-500"
            active-class="border-b-2 border-emerald-500">
            Travel</NuxtLink>
        <NuxtLink to="/future" class="text-slate-50 hover:border-b-2 border-blue-700"
            active-class="border-b-2 border-blue-700">
            Future</NuxtLink>
    </div>
</template>