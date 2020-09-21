<template>
  <div class="home">
    测试
    <div>
      <aside class="menu">
        <p class="menu-label">
          General
        </p>
        <ul class="menu-list menu-nested-list-margin">
          <li><a>Dashboard</a></li>
          <li><a>Customers</a></li>
        </ul>
        <p class="menu-label">
          Administration
        </p>
        <ul class="menu-list menu-item-hover-color">
          <li><a>Team Settings</a></li>
          <li>
            <a class="is-active">Manage Your Team</a>
            <ul>
              <li><a>Members</a></li>
              <li><a>Plugins</a></li>
              <li>
                <ul>
                  <li><a>Members</a></li>
                  <li><a>Plugins</a></li>
                  <li><a>Add a member</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a>Invitations</a></li>
          <li><a>Cloud Storage Environment Settings</a></li>
          <li><a>Authentication</a></li>
        </ul>
        <p class="menu-label">
          Transactions
        </p>
        <ul class="menu-list">
          <li><a class="menu-item-active-background-color">Payments</a></li>
          <li><a>Transfers</a></li>
          <li><a>Balance</a></li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Test"
};
</script>

<style>

</style>
