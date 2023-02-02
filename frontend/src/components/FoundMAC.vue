<template>
  <div class="found-mac-container">
    <div>
        <h3>Vendor Details</h3>
        <span>
            <h4>OUI:</h4>
            <p>{{ foundMacAddress.vendorDetails.oui }}</p>
        </span>

        <span>
            <h4>Is Private:</h4>
            <p>{{ foundMacAddress.vendorDetails.isPrivate }}</p>
        </span>

        <span>
            <h4>Company Name:</h4>
            <p>{{ foundMacAddress.vendorDetails.companyName }}</p>
        </span>

        <span>
            <h4>Company Address:</h4>
            <p>{{ foundMacAddress.vendorDetails.companyAddress }}</p>
        </span>

        <span>
            <h4>Country Code:</h4>
            <p>{{ foundMacAddress.vendorDetails.countryCode }}</p>
        </span>
    </div>

    <div>
        <h3>Block Details</h3>
        <span>
            <h4>Is Block Found:</h4>
            <p>{{ foundMacAddress.blockDetails.blockFound }}</p>
        </span>

        <span>
            <h4>Border Left:</h4>
            <p>{{ foundMacAddress.blockDetails.borderLeft }}</p>
        </span>

        <span>
            <h4>Border Right:</h4>
            <p>{{ foundMacAddress.blockDetails.borderRight }}</p>
        </span>

        <span>
            <h4>Block Size:</h4>
            <p>{{ foundMacAddress.blockDetails.blockSize }}</p>
        </span>

        <span>
            <h4>Assignment Block Size:</h4>
            <p>{{ foundMacAddress.blockDetails.assignmentBlockSize }}</p>
        </span>

        <span>
            <h4>Created At:</h4>
            <p>{{ foundMacAddress.blockDetails.dateCreated }}</p>
        </span>

        <span>
            <h4>Updated at:</h4>
            <p>{{ foundMacAddress.blockDetails.dateUpdated }}</p>
        </span>
    </div>

    <div>
        <h3>MAC Address Details</h3>
        <span>
            <h4>Search Term:</h4>
            <p>{{ foundMacAddress.macAddressDetails.searchTerm }}</p>
        </span>

        <span>
            <h4>Is Valid:</h4>
            <p>{{ foundMacAddress.macAddressDetails.isValid }}</p>
        </span>

        <span>
            <h4>Transmission Type:</h4>
            <p>{{ foundMacAddress.macAddressDetails.transmissionType }}</p>
        </span>

        <span>
            <h4>Administration Type:</h4>
            <p>{{ foundMacAddress.macAddressDetails.administrationType }}</p>
        </span>
    </div>
  </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { mapState } from 'vuex'

    export default defineComponent({
        name: "Found-MAC",
        computed: {
            ...mapState(["foundMacAddress"])
        }
    })
</script>