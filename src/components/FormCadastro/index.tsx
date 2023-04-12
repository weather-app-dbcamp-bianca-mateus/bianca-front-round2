import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import './styles.css'
import { CidadeEData } from "./CidadeEData";
import { DadosMeteorologicos } from "./DadosMeteorologicos";

export default function FormCadastro() {
  // const handleSubmit = (event: Event) => {
  //   event.preventDefault();
  //   enviarRegistro({})
  // }

  return (
    <form onSubmit={() => { }}>
      <Grid container flexDirection="column" xs={12}>
        <Grid item xs={12} className="cidade-e-data">
          <CidadeEData />
        </Grid>
        <Grid item xs={12}>
          <DadosMeteorologicos />
        </Grid>
        <Box
          sx={{ display: "flex", justifyContent: "end" }}>
          <button type="button" className="buttons"> Cancelar </button>
          <button type="submit" className="buttons"> Salvar </button>
        </Box>
      </Grid>
    </form>
  )
}
