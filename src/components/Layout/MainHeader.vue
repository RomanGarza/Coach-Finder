<template>
<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><router-link to="/coaches">All Coaches</router-link></li>
      <li><router-link to="/requests">Requests</router-link></li>
    </ul>
  </div>
</div>
</template>
