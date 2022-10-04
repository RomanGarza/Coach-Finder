<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl"><router-link to="/">Find a Coach</router-link></a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li><router-link to="/requests">Requests</router-link></li>
      </ul>
    </div>
  </div>
</template>
