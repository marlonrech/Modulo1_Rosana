import './Post.css'

export default function Post({
  imagemDoPerfil,
  nomeDoAutor,
  dataDoPost,
  fotoDoPost,
  descricaoDoPost,
  curtidoPor,
  numeroDeCurtidas,
}){
  return (
    <div className="Post">

      <div className="Header">
        <div className="InformacoesPessoais">
          <img src={imagemDoPerfil} alt="imagem do perfil" className="ImagemDoPerfil" />
          <div>
            <h3 className="NomeDoAutor">{nomeDoAutor}</h3>
            <p className="DataDoPost">{dataDoPost}</p>
          </div>
        </div>
        <img src="https://img.icons8.com/material-rounded/24/000000/menu-2.png" alt="menu" class="Menu" />
      </div>

      <p>{descricaoDoPost}</p>
      <img src={fotoDoPost} alt="foto do post" className="FotoDoPost" />

      <div className="Footer">
        <div className="FooterUp">
          <div className="HeartComments">
            <img className="Heart" src={numeroDeCurtidas >= 1 ? 'https://img.icons8.com/color/48/000000/hearts.png' : 'https://img.icons8.com/windows/32/FA5252/hearts.png'} alt="curtir" />
            <span>Comments</span>
          </div>
          <p>Share</p>
        </div>
        {numeroDeCurtidas >= 1 && (
          <p className="Liked">Liked by <strong>{curtidoPor} and {numeroDeCurtidas} others </strong></p>
        )}
      </div>
    </div>
  )
}
