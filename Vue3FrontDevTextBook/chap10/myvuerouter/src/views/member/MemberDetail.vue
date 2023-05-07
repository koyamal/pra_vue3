<template>
  <h1>Member Management</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink v-bind:to="{name: 'AppTop'}">
          TOP
        </RouterLink>
      </li>
      <li>
        <RouterLink v-bind:to="{name: 'MemberList'}">
          MemberList
        </RouterLink>
      </li>
      <li>Member Detail</li>
    </ul>
  </nav>
  <section>
    <h2>Detail</h2>
  </section>
</template>
