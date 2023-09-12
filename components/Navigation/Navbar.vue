<template>
    <header class="flex justify-between align-center  w-screen bg-zinc-900 h-18 p-4 md:justify-start gap-8">
        <Icon color="white" name="ic:baseline-account-circle" size="2.5rem" />
        <h1 class=" font-bold text-slate-50 text-2xl text-red-400 md:hidden">GlobalLink</h1>
        <div class="hidden md:inline-flex w-screen">
            <NavigationDesktopNavLayout />
        </div>
        <div class="flex justify-end align-center md:hidden ">
            <NavigationDropdown class="mr-3" />
        </div>
    </header>
</template>
