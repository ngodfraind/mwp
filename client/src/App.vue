<script lang="ts">

import gql from 'graphql-tag'

const removeTypeName = (obj: any) => {
  delete obj.__typename

  return obj
}

export default {
  data () {
    return {
      cars: [],
      showEditModal: false,
      editedCar: {
        id: '', // Initialize with empty values
        vin: '',
        manufacturer: '',
        model_details: '',
        gearbox: '',
        color: '',
        mileage: '',
        first_reg_date: null
        // Add other car details here
      },
    }
  },
  methods: {
    openEditModal(car: any) {
      // Populate the editedCar object with the car data
      this.editedCar = removeTypeName({ ...car });
      this.showEditModal = true;
    },
    saveChanges() {
      this.$apollo.mutate({
      // Query
      mutation: gql` mutation Update($input: UpdateCar!) {
        update(input: $input) {
          vin
          id
          manufacturer
          model_details
          gearbox
          color
          mileage
          first_reg_date
        }
      }`,
      // Parameters
      variables: {
        input: this.editedCar
      }
    })
      // Perform the mutation to save changes to the server here
      // You'll need to implement this part using Apollo Client
      // After saving, close the modal
      this.showEditModal = false;
    },
  },
  apollo: {
      cars() { 
        return {
          query: gql`query GetCars{
            cars {
              id
              vin
              manufacturer
              model_details
              gearbox
              color
              mileage
              first_reg_date
            }
          }`
        }
      }
    }
}
</script>

<template>
  <header>
  </header>
  <body>
    <div>
      <h1> Car List </h1>
      <table class="table table-striped">
        <thead>
          <th>id</th>
          <th>vin</th>
          <th>manufacturer</th>
          <th>model details</th>
          <th>gearbox</th>
          <th>color</th>
          <th>mileage</th>
          <th>first reg. date</th>
          <th>actions</th>
        </thead>
        <tbody>
        <tr v-for="car in cars">
          <td>{{ car.id }}</td>
          <td>{{ car.vin }}</td>
          <td>{{ car.manufacturer }}</td>
          <td>{{ car.model_details }}</td>
          <td>{{ car.gearbox }}</td>
          <td>{{ car.color }}</td>
          <td>{{ car.mileage }}</td>
          <td>{{ car.first_reg_date }}</td>
          <td>
            <font-awesome-icon icon="fa-solid fa-cog" @click="openEditModal(car)"/>
            <!-- delete would go here -->
          </td>
        </tr>
        </tbody>
      </table>  
   </div>

       <!-- Edit Modal -->
    <b-modal v-model="showEditModal" title="Edit Car" @ok="saveChanges">
      <BForm>
        <div class="form-group">
          <label for="vin">VIN:</label>
          <input type="text" class="form-control" id="vin" v-model="editedCar.vin" required />
        </div>

        <div class="form-group">
          <label for="manufacturer">Manufacturer:</label>
          <input type="text" class="form-control" id="manufacturer" v-model="editedCar.manufacturer" required />
        </div>

        <div class="form-group">
          <label for="manufacturer">Model details:</label>
          <input type="text" class="form-control" id="model_details" v-model="editedCar.model_details" required />
        </div>

        <div class="form-group">
          <label for="manufacturer">Gearbox:</label>
          <input type="text" class="form-control" id="gearbox" v-model="editedCar.gearbox" required />
        </div>

        <div class="form-group">
          <label for="manufacturer">Color:</label>
          <input type="text" class="form-control" id="color" v-model="editedCar.color" required />
        </div>

        <div class="form-group">
          <label for="manufacturer">Mileage:</label>
          <input type="text" class="form-control" id="mileage" v-model="editedCar.mileage" required />
        </div>

        <div class="form-group">
          <label for="manufacturer">First reg date:</label>
          <input type="date" class="form-control" id="first_reg_date" v-model="editedCar.first_reg_date" required />
        </div>
      </BForm >
    </b-modal>
  </body>
</template>
