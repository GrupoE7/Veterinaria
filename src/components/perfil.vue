<template>
 <div class="conatiner mt-5">
        <div class="row">
            <div class="col-md-4 mx-auto">
                <div class="card">
                    <div class="card-header text-white bg-success">
                     <h5 class="">Crear Producto</h5>
                    </div>
                    <div class="card-body">
                       
                        <form action="http://localhost:3000/upload" method="post" enctype="multipart/form-data">
                            <div class="input-group mb-3">
                                    <div class="custom-file">
                                        <input type="file" name="image" class="custom-file-input" id="inputGroupFile02">
                                     <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">....</label>
                                    </div>
                                </div>

                            <div class="form-group">
                              <input type="text" name="title" class="form-control" placeholder="Nombre">
                            </div>


                            <div class="form-group">
                                <textarea name="description" class="form-control" rows="2" placeholder="description"></textarea>
                            </div>

                            <div class="form-group">
                                <textarea name="precio" class="form-control" rows="2" placeholder="precio"></textarea>
                            </div>

                            <button type="submit" class="btn btn-success btn-block">Subir</button>
                       </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

