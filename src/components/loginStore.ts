`<div class="container-fluid vh-100 d-flex justify-content-center flex-column" id="index">
    <div class="row justify-content-center align-items-center d-none d-sm-flex">
        <div class="active col-8 bg-light me-2 shadow p-3" id="loginAtivo">
            <div>
            <h3 class="text-center">Entrar</h3>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="emailIpt" placeholder="name@example.com" required />
                <label for="floatingInput">Email</label>
            </div>
            <form action="">
                <div class="input-group mb-3">
                <div class="form-floating">
                    <input type="password" class="form-control" id="passwordIpt-1" placeholder="Senha" required />
                    <label for="floatingInputGroup1">Senha</label>
                </div>
                <span class="input-group-text"><i class="bi bi-eye-slash"></i></span>
                </div>
                <div class="form-check form-switch mb-3">
                <input class="form-check-input" type="checkbox" role="switch" id="checkSession" name="checkSession" />
                <label class="form-check-label" for="checkSession">Permanecer logado</label>
                </div>
                <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" id="loginBtn">Logar</button>
                </div>
            </form>
            </div>
        </div>
    </div>
</div>`;

`<i class="bi bi-eye"></i>`;
