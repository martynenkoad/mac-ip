<template>
  <div class="ip-view">
    <BaseLayout>
      <template #header>
        <h1>IP Address Information</h1>
        <button
          class="basic-button"
          @click="getIp"
          :disabled="ipAddress"
        >
            Click here to get info!
        </button>
      </template>

      <template #main>
        <div class="main" v-if="ipAddress">
            <p class="ip-info text-focus-in">YOUR IP IS: {{ ipAddress.ip_address }}</p>
            <img 
              :src="ipAddress.flag.svg"
              alt="Country Icon"
              class="flag text-focus-in-1-delay"
            />

            <div class="info-section text-focus-in-2-delay">
                
                <div class="info">
                    <span class="main-info">
                        <h3>City: </h3>
                        <p>{{ ipAddress.city }}</p>
                        <div class="arrow-container">
                          <span 
                            :class="`material-symbols-outlined ${openCityInfo ? 'expand-less' : 'expand-more'}`"
                            @click="openCityInfo = !openCityInfo"
                          >
                            {{ openCityInfo ? "expand_less" : "expand_more" }}
                          </span>
                        </div>
                    </span>
    
                    <div
                      class="additional-info"
                      v-if="openCityInfo"
                    >
                        <span>
                            <h3>City Geoname Id: </h3>
                            <p>{{ ipAddress.city_geoname_id }}</p>
                        </span>
        
                        <span>
                            <h3>Region: </h3>
                            <p>{{ ipAddress.region }}</p>
                        </span>
        
                        <span>
                            <h3>Region ISO Code: </h3>
                            <p>{{ ipAddress.region_iso_code }}</p>
                        </span>
        
                        <span>
                            <h3>Region Geoname ID: </h3>
                            <p>{{ ipAddress.region_geoname_id }}</p>
                        </span>
        
                        <span>
                            <h3>Postal Code: </h3>
                            <p>{{ ipAddress.postal_code }}</p>
                        </span>
        
                    </div>     
                </div>

                <div class="info">
                    <span class="main-info">
                        <h3>Country: </h3>
                        <p>{{ ipAddress.country }}</p>
                        <div class="arrow-container">
                          <span 
                          :class="`material-symbols-outlined ${openCountryInfo ? 'expand-less' : 'expand-more'}`"
                            @click="openCountryInfo = !openCountryInfo"
                          >
                            {{ openCountryInfo ? "expand_less" : "expand_more" }}
                          </span>
                        </div>
                    </span>

                    <div 
                      class="additional-info"
                      v-if="openCountryInfo"
                    >
                      <span>
                          <h3>Country Code: </h3>
                          <p>{{ ipAddress.country_code }}</p>
                      </span>
                    
                      <span>
                          <h3>Country Geoname ID: </h3>
                          <p>{{ ipAddress.country_geoname_id }}</p>
                      </span>
                     
                      <span>
                          <h3>Is situated in Europe: </h3>
                          <p>{{ ipAddress.country_is_eu }}</p>
                      </span>
                      
                      <span>
                          <h3>Continent: </h3>
                          <p>{{ ipAddress.continent }}</p>
                      </span>
                    
                      <span>
                          <h3>Continent Code: </h3>
                          <p>{{ ipAddress.continent_code }}</p>
                      </span>
                    
                      <span>
                          <h3>Continent Geoname ID: </h3>
                          <p>{{ ipAddress.continent_geoname_id }}</p>
                      </span>
                    
                      <span>
                          <h3>Longtitude: </h3>
                          <p>{{ ipAddress.longtitude }}</p>
                      </span>
                    
                      <span>
                          <h3>Latitude: </h3>
                          <p>{{ ipAddress.latitude }}</p>
                      </span>
                    
                    </div>
                </div>

                <div class="info">
                    <span class="main-info">
                        <h3>Connection</h3>
                        <div class="arrow-container">
                          <span 
                            :class="`material-symbols-outlined ${openSecurityInfo ? 'expand-less' : 'expand-more'}`"
                            @click="openSecurityInfo = !openSecurityInfo"
                          >
                            {{ openSecurityInfo ? "expand_less" : "expand_more" }}
                          </span>
                        </div>
                    </span>

                    <div 
                      class="additional-info"
                      v-if="openSecurityInfo"
                    >
                        <span>
                            <h3>Autonomous System Number:</h3>
                            <p>{{ ipAddress.connection.autonomous_system_number }}</p>
                        </span>

                        <span>
                            <h3>Autonomous System Organization:</h3>
                            <p>{{ ipAddress.connection.autonomous_system_organization }}</p>
                        </span>

                        <span>
                            <h3>ISP Name:</h3>
                            <p>{{ ipAddress.connection.isp_name }}</p>
                        </span>
                    </div>
                </div>

            </div>
        </div>
      </template>
    </BaseLayout>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { mapState, mapActions } from 'vuex'
  import BaseLayout from '../assets/layouts/BaseLayout.vue'

  export default defineComponent({
    name: "Ip-View",

    components: {
        BaseLayout
    },

    methods: {
        ...mapActions(["getIp"])
    },

    data() {
        return {
            openCityInfo: false,
            openCountryInfo: false,
            openSecurityInfo: false
        }
    },

    computed: {
        ...mapState(["ipAddress"])
    }
  })
</script>
