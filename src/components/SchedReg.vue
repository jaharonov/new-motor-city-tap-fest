<template>
  <div class="hello">
    <div class="m-5">
      <div class="row p-5"></div>  
</div>
  <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Time</th>
      <th scope="col">Studio 1</th>
      <th scope="col">Studio 2</th>
      <th scope="col">Studio 3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-warning">
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  </div> 
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { time: '12:30pm - 1:45pm', studio_1: '', studio_2: 'Shelby Kaufman Intermediate', studio_3: 'Maud Arnold            Advanced' },
          { time: '2:00pm - 3:15pm', studio_1: 'MCTF Conservatory 1 12:00pm-4:30pm', studio_2: 'Kelsey Rose Young        Intermediate', studio_3: 'Ray Hesselink                  Advanced' },
          { time: '3:30pm - 4:45pm', studio_2: '', studio_3: 'Caleb Teicher               Intermediate' },
          { time: '5:00pm-6:15pm', studio_1: 'Caleb Teicher          Lindy Hop - Open Level', studio_2: 'MCTF Conservatory 2     3:15pm-7:45pm', studio_3: 'Caleb Teicher               Intermediate' },
          { time: '6:30pm-7:45pm', studio_1: '', studio_2: 'Dickerson', studio_3: 'Macdonald' },
          { time: '8:00pm', studio_1: 40, studio_2: 'Dickerson', studio_3: 'Macdonald' }

        ]
      }
    }
  }
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>