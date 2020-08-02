import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
<<<<<<< Updated upstream
=======
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
>>>>>>> Stashed changes

function CadastroCategoria() {
  return (
    <PageDefault>
<<<<<<< Updated upstream
      <h1>Cadastro de Categoria</h1>
=======
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="textarea"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
>>>>>>> Stashed changes

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

<<<<<<< Updated upstream
        <button>
=======
        <Button> 
>>>>>>> Stashed changes
          Cadastrar
        </Button>
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;