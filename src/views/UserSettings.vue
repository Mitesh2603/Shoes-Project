<template>
    <div class="us">
        <h1>User Settings</h1>
        <UserSettingNav />
        <router-view class="us__content"></router-view>
        <router-view name="helper" class="us__content us__content--helper" />
    </div>
</template>

<script>
import UserSettingNav from "./UserSettingsNav.vue"

export default{
    components:{
        UserSettingNav,
    }
}
</script>