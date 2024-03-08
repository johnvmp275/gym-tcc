<script setup>
import Dropdown from '@/components/widgets/dropdown/dropdown.vue'
</script>

<template>
  <section>
    <div class="nav-paginas">
      <Dropdown titlteDropdown="Institucionais">
        <template #dropdown_description>
          <div v-for="pagina in paginas" :key="pagina.id">
            qwsqwsqwsqw
          </div>
          qwsqwsqws
        </template>
      </Dropdown>
      <!-- <select name="" id="" v-model="paginaEscolhida">
        <option value="institucionais">Institucionais</option>
        <option value="quem_somos">Quem somos</option>
      </select> -->
    </div>
    <div class="paginas" v-html="conteudoPagina"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      paginas: {
        institucionais: `<section class="institutional-container">
<p><strong>TERMOS E CONDIÇÕES DE USO</strong></p>
<p>A aceitação dos termos e condições de uso discriminados abaixo é absolutamente indispensável para a realização de compras pelo site http://www.verdegarden.com.br. A concordância, portanto, é condição necessária para a utilização dos nossos serviços.</p>
<p>Este Termo de Uso apresenta as “Condições Gerais” aplicáveis ao uso dos serviços oferecidos por A &amp; A - INDUSTRIA DE ROTOMOLDAGEM DO BRASIL EIRELI, com sede na R PROSPERO GRISI, nº 81, Bairro Vila Joest, na cidade de Leme – SP, CEP nº 13614-060, inscrita no CNPJ sob nº 27.730.876/0001-40, doravante denominada “Verde Garden", o qual inclui a intermediação, venda e comercialização de produtos da categoria Jardinagem e Paisagismo, via marketplace, no site http://www.verdegarden.com.br.</p>
<p>Qualquer pessoa, legalmente capaz, denominada “Usuário”, que utilize os serviços da VERDE GARDEN deve aceitar este Termo de Utilização e todas as políticas e princípios que o regem.</p>
<p><br>O Termo de utilização é indispensável, sendo obrigatório para a utilização dos produtos e serviços deste Website.<br>A utilização dos produtos e serviços oferecidos pela VERDE GARDEN implica na imediata anuência deste Termo e seu conteúdo. Este acordo constitui-se em documento exclusivo entre a VERDE GARDEN e o Usuário, substituindo-se, deste modo, todos os acordos, representações, garantias e entendimentos anteriores com relação à VERDE GARDEN, seus conteúdos, produtos ou serviços fornecidos por ou através deste Website.</p>
<p>Os usuários menores de 18 anos de idade somente poderão efetuar o registro ou cadastro neste site desde que devidamente representados ou assistidos, conforme previsto nos artigos nº 1634 e 1690 do código civil, por seus representantes ou assistentes legais, devendo esses ser responsáveis na esfera cível por todo e qualquer ato praticado pelos menores quando da utilização do site.</p>
<p>Os representantes legais serão responsáveis por todo e qualquer ato ilícito praticado pelo menor quando da utilização do site.</p>
<p>&nbsp;</p>
<p><strong>1.&nbsp;DAS DISPOSIÇÕES GERAIS</strong></p>
<p>1.1. A VERDE GARDEN não garante que seu conteúdo seja apropriado ou esteja disponível para uso em outras localidades fora do território brasileiro; também se isenta de responsabilidades pelo acesso ao Website a partir de territórios onde seu conteúdo seja ilegal, recaindo inteiramente o ônus de utilização sobre o Usuário.</p>
<p>1.2. Destarte, ao optar pelo acesso à VERDE GARDEN, o Usuário compreende, reconhece e concorda que sua utilização é regida pelo ordenamento jurídico da República Federativa do Brasil em relação à conduta online e conteúdo disponibilizado.</p>
<p>1.3. As informações sobre os produtos estarão organizadas no website http://www.verdegarden.com.br de forma clara, precisa e em português, fazendo constar: Nome do Produto, Foto Ilustrativa, Valor do Produto, Descrição do Produto, Regras de Uso aos Usuários, bem como demais informações atinentes ao produto ofertado.</p>
<p>1.4. O uso deste Website restringe-se ao privado, sendo vedada sua utilização comercial com fins lucrativos por terceiros não autorizados, bem como também é proibido, e protegido pela legislação competente, o uso de qualquer software ou sistema automatizado para extrair dados deste Website para a exibição em qualquer outro lugar do World Wide Web (“screen scraping”) sem o consentimento expresso de seus proprietários.</p>
<p>1.5. A VERDE GARDEN envidará esforços para manter seu website no ar, durante 24 (vinte e quatro) horas por dia sem interrupção, salvo a impossibilidade de funcionamento integral e ininterrupto do sistema de telecomunicação ou de informática, por eventos causados nos casos fortuitos ou de força maior, nesta situação de fragilidade também se incluindo, dado sua complexidade, a dependência de serviços de telecomunicações prestados por terceiros, razão pelo qual não se garante, de forma nenhuma, a prestação do serviço de forma ininterrupta e/ou isenta de erros.</p>
<p>1.6. A VERDE GARDEN isenta-se da responsabilidade por qualquer erro ou atraso na remoção de conteúdo impreciso, ilícito ou censurável proveniente ou fornecido por terceiros através de nosso Website. A equipe da VERDE GARDEN pode mudar, a qualquer tempo e sem aviso prévio, os conteúdos e funcionalidades do Website.</p>
<p>1.7. A aquisição do(s) produto(s) pelo Usuário será finalizada e concluída após o devido pagamento, que se dará através da prestação de serviço de empresa responsável por gestão de pagamentos. A VERDE GARDEN não poderá intervir nos resultados da relação do Usuário com a empresa responsável por gestão de pagamentos, uma vez que a mesma administra suas operações independentemente.</p>
<p>1.8. A VERDE GARDEN não será responsável pela disponibilidade ou não dos Serviços prestados pela empresa responsável pela gestão de pagamentos ou pela impossibilidade do uso do Serviço.</p>
<p>1.9. A VERDE GARDEN poderá, a qualquer tempo, alterar o presente instrumento visando o aprimoramento, bem como a melhoria dos serviços prestados. O novo instrumento contratual entrará em vigor, sem prejuízo dos produtos veiculados na vigência do contrato anterior. Assim, a VERDE GARDEN recomenda que o Usuário tenha o costume de reler atentamente os termos e condições de uso sempre que acessar o Site ou realizar qualquer operação por meio deste.</p>
<p>1.10. A VERDE GARDEN tomará todas as medidas possíveis para manter a confidencialidade, segurança e sigilo atinentes às informações dos Usuários, porém não responderá por prejuízo que possa ser derivado da violação dessas medidas por parte de terceiros que utilizem as redes públicas ou a internet, subvertendo os sistemas de segurança para acessar as informações de Usuários.</p>
<p>1.11. Com efeito, preocupada com a segurança e privacidade dos dados que trafegam no Site, a VERDE GARDEN declara que a senha de acesso e todos os dados que o Usuário digitar na página do Site são totalmente protegidos por tecnologia de criptografia, com chave de segurança. A VERDE GARDEN recomenda que o Usuário nunca forneça sua senha a terceiros. O Usuário é integralmente responsável pelo sigilo e utilização de sua senha e identidade.</p>
<p>1.12. A VERDE GARDEN não será responsável por qualquer dano, prejuízo ou perda no equipamento do Usuário causado por falhas no sistema, no servidor, ou na internet decorrentes de condutas de terceiros, ressalvado que eventualmente, o sistema poderá não estar disponível por motivos técnicos ou falhas da internet, ou por qualquer outro evento fortuito ou de força maior alheio ao seu controle.</p>
<p>&nbsp;</p>
<p><strong>2. DO CADASTRO DO USUÁRIO</strong></p>
<p>2.1. O cadastro do Usuário será confirmado após o correto e completo preenchimento de todos os dados solicitados.</p>
<p>2.2. Não será permitido ao Usuário ter mais de um cadastro, caso isso ocorra a VERDE GARDEN desabilitará, automaticamente, após verificação dos dados, definitivamente todos os cadastros.&nbsp;Será permitido o cadastramento de Pessoa Jurídica, na pessoa de seu representante legal.</p>
<p>2.3. Todo e qualquer Usuário menor de 18 anos deverá obter o consentimento expresso de seus pais ou representantes legais antes de fornecer os seus endereços de e-mail ou quaisquer dados à VERDE GARDEN por meio deste WebSite.</p>
<p>2.4. Todas as informações fornecidas pelo Usuário devem ser exatas, precisas, verdadeiras e devidamente atualizadas, caso ocorra qualquer alteração, reconhece o Usuário, ainda, que a VERDE GARDEN não tem a obrigação de verificar a precisão dos dados transmitidos pelo Usuário ou qualquer outra pessoa.</p>
<p>2.5. A VERDE GARDEN não se responsabiliza pela correção de dados pessoais inseridos pelo Usuário, sendo certo que o Usuário ou seus pais ou representantes legais, quando for o caso garantem e respondem, em qualquer caso, pela veracidade, precisão e autenticidade dos dados pessoais cadastrados.</p>
<p>2.6. A VERDE GARDEN se compromete a não ceder ou comercializar, sob nenhuma forma, informações individuais do Usuário cadastrado sem a sua expressa autorização, exceto nos casos em que a VERDE GARDEN necessite transmitir tais informações individuais aos seus parceiros comerciais para o fim específico de operacionalizar o relacionamento comercial mantido entre a VERDE GARDEN e o Usuário.</p>
<p>2.7. O Usuário acorda que a Internet, enquanto rede mundial de computadores a qual qualquer pessoa pode ter acesso, não é um meio totalmente seguro. No caso de utilização do Site, a VERDE GARDEN não se responsabilizará em nenhuma hipótese por prejuízos de qualquer espécie, inclusive, mas sem limitação, àqueles decorrentes do uso de tais dados por terceiros ou extravio de dados do Usuário cadastrado, decorrentes direta ou indiretamente do seu acesso ou navegação no Site. Entretanto, a VERDE GARDEN assegura que dispõe de recursos técnicos que visam a evitar ou atenuar os riscos inerentes da Internet.</p>
<p>2.8. A VERDE GARDEN, a seu critério exclusivo e absoluto, pode alterar os critérios de qualificação e/ou exigências para a manutenção do cadastrado no site. Deste modo, a VERDE GARDEN poderá imediatamente encerrar o registro do cadastrado no site, independentemente do pagamento de multa e/ou indenização, a qualquer título, ao usuário, externando posteriormente a justificativa.</p>
<p>2.9. Fica ressalvado o direito do Usuário em retificar quaisquer dados enviados à VERDE GARDEN. Entretanto, o direito de retificação do Usuário não obstará ou substituirá o direito da VERDE GARDEN em pleitear as indenizações cabíveis, no caso de informações errôneas ensejarem quaisquer danos e/ou prejuízos à VERDE GARDEN ou a terceiros, no período anterior à sua retificação pelo Usuário, entendendo-se como tal o momento do efetivo recebimento de tal retificação pela VERDE GARDEN em sua Central de Atendimento.</p>
<p>&nbsp;</p>
<p><strong>3. DAS VENDAS ONLINE</strong></p>
<p>3.1. A VERDE GARDEN será responsável em efetivar as vendas dos produtos, observados o objeto descrito na cláusula primeira deste instrumento. A entrega de qualquer produto somente se dará no território nacional.</p>
<p>3.2. A VERDE GARDEN não se responsabiliza pelas eventuais transações comerciais que poderão ser realizadas diretamente entre o Usuário e as Empresas Parceiras que disponibilizarem seus produtos no site da VERDE GARDEN, sendo certo que quaisquer dúvidas e controvérsias relativas aos itens comercializados pelas Empresas Parceiras aos Usuários deverão ser diretamente sanadas por essas Empresas, não havendo qualquer ingerência ou responsabilidade da VERDE GARDEN nesse sentido.</p>
<p>3.3. A VERDE GARDEN, por sua vez, envidará seus melhores esforços para, por sua livre e espontânea vontade e sem o dispêndio de quaisquer verbas, auxiliar o Usuário na obtenção de informações e/ou resolução de quaisquer controvérsias oriundas do relacionamento comercial mantido entre o Usuário e as Empresas Parceiras.</p>
<p>&nbsp;</p>
<p><strong>4. DAS SANÇÕES</strong></p>
<p>4.1. Sem prejuízo de outras medidas, a VERDE GARDEN poderá advertir, cancelar, suspender, temporária ou definitivamente, a conta do Usuário a qualquer tempo, e iniciar as ações cabíveis, se o Usuário não cumprir qualquer dispositivo deste Termo de Utilização, se descumprir com seus deveres de Usuário, se não puder ser confirmada e verificada a identidade do Usuário ou se qualquer informação fornecida por ele esteja incorreta ou se verificar que os anúncios ou qualquer atitude do Usuário tenha causado algum dano a terceiros ou à própria VERDE GARDEN ou tenham a potencialidade de assim o fazer.&nbsp;Caso o Usuário tenha seu cadastro inabilitado, todas as Aquisições de Produtos adquiridos serão automaticamente canceladas.</p>
<p>4.2. Para dirimir qualquer dúvida, a VERDE GARDEN poderá, a qualquer tempo, a seu exclusivo critério, solicitar o envio de documentação pessoal do Usuário.</p>
<p>&nbsp;</p>
<p><strong>5.&nbsp;DA PROPRIEDADE INTELECTUAL</strong></p>
<p>5.1. O Usuário acorda que o WebSite http://www.verdegarden.com.br, assim como os logotipos, marcas, insígnias, fotos, imagens, descrições, textos, "layout", símbolos, sinais distintivos, manual(ais) e quaisquer outros materiais correlatos, constituem, conforme o caso, direitos autorais, segredos de negócio, e/ou direitos de propriedade da VERDE GARDEN ou seus licenciadores, conforme o caso, sendo tais direitos protegidos pela legislação nacional e internacional aplicável à propriedade intelectual, especialmente quanto aos termos e condições das Leis nºs 9.279/96, 9.609/98 e 9.610/98 e que não pleitearão ou reclamarão, a qualquer tempo, tais direitos de propriedade como se seus fossem.</p>
<p>5.2. É expressamente proibido ao Usuário a reprodução, a distribuição, a modificação, a exibição, a criação de trabalhos derivados ou qualquer outra forma de utilização do conteúdo deste WebSite e dos materiais veiculados no ou pelo WebSite.</p>
<p>5.3. Em atenção à proteção aos direitos do Usuário, fica desde já esclarecido e acordado que não serão aceitas ideias ou sugestões relacionadas a produtos, serviços ou quaisquer outros planos de trabalho, exceto quando expressamente requisitado e acordado por escrito, previamente, com a VERDE GARDEN. Conforme legislação vigente, as ideias ou concepções abstratas, planos e esquemas não são protegidos no Brasil.</p>
<p>5.4. Deste modo, o Usuário declara, reconhece e aceita que qualquer transmissão de ideias ou concepções poderá ser utilizada por quaisquer terceiros, inclusive pela VERDE GARDEN, para o propósito de desenvolvimento e/ou criação de produtos utilizando tais informações, sem que gere qualquer obrigação de compensar o Usuário.</p>
<p>&nbsp;</p>
<p><strong>6. DISPOSIÇÕES GERAIS</strong></p>
<p>6.1. Após o cadastro no website http://www.verdegarden.com.br, o Usuário poderá realizar as aquisições dos produtos e efetuar o pagamento durante o período de publicação.</p>
<p>6.2. O produto devidamente comprado é irrevogável, nos termos dos Artigos nº 427 e 429 do Código Civil do ano de 2002, ressalvados as circunstâncias excepcionais.</p>
<p>6.3. Ao adquirir o produto e efetuar o pagamento através do website http://www.verdegarden.com.br, o Usuário declara estar ciente de todos os termos, condições de recebimento e todas as informações atinentes ao produto adquirido, de acordo com o disposto.</p>
<p>6.4. O Usuário reconhece e aceita que o estágio atual da técnica não permite a elaboração de programas de computador totalmente isentos de vícios ou defeitos e que, assim sendo, a VERDE GARDEN não pode garantir que o Site operará ininterruptamente ou livre de vícios, vírus ou defeitos; e (b) o Site não foi desenvolvido sob encomenda do Usuário, mas para uso genérico, razão pela qual a VERDE GARDEN não pode garantir que este atenderá quaisquer necessidades específicas do Usuário.</p>
<p>6.5. Quando no Site existirem “links” para outros sites, a VERDE GARDEN recomenda ao Usuário consultar as respectivas "Políticas de Uso" e "Termos de Privacidade" de tais sites, bem como quaisquer outros regulamentos específicos de cada um deles, caso acesse tais sites. A VERDE GARDEN não presta aval, nem garante ou representa quaisquer terceiros cujos links constem do Site, sendo certo que sua disponibilização no Site tenciona proporcionar maior comodidade e opções de entretenimento ao Usuário. O Usuário reconhece que todo e qualquer problema gerado em tais sites devem ser resolvido com a empresa titular do respectivo site, sem a participação da VERDE GARDEN.</p>
<p>6.6. Determinados atos, incluindo, mas não limitado a usos com propósitos ilegais, corrupção de informações ou dados, violação de direitos de propriedade industrial ou autoral, violação de direitos de terceiros (inclusive crianças), envio de mensagens de cunho ameaçador, racista ou pornográfico, interferir ou interromper o serviço prestado pelo Site e/ou qualquer tentativa de propagação de vírus ou programa não desejado, poderão imediatamente resultar no encerramento de qualquer relação entre a VERDE GARDEN e o Usuário.</p>
<p>6.7. A nulidade ou invalidade de qualquer das disposições contidas neste Termo de Uso não implicará a nulidade ou invalidade das demais.</p>
<p>6.8. O exercício parcial ou a falta de exercício, a concessão de prazo, a tolerância, ou a omissão no exercício de qualquer direito conferido à VERDE GARDEN neste Termo de Uso e/ou por lei não constituirá novação ou renúncia a tal direito, nem prejudicará sua execução.</p>
<p>6.9. Em caso de dúvidas, o Usuário deverá entrar em contato através de um dos canais de comunicação disponíveis neste website.</p>
<p>&nbsp;</p>
<p><strong>7. LEI APLICÁVEL E FORO</strong></p>
<p>7.1. Este Termo de Uso é regido e interpretado de acordo com as leis da República Federativa do Brasil e, para dirimir quaisquer controvérsias que, direta ou indiretamente, daqui decorram, fica desde já eleito o Foro da Comarca do Município de Leme, Estado de São Paulo, com a renúncia expressa de qualquer outro, por mais privilegiado que seja ou venha a ser.</p>
<p>&nbsp;</p>
</section>`,
        quem_somos: `<article class="about-us">
<section class="institutional-container">
<h1><br><span style="font-size: 14pt;"><span style="font-size: 18pt;">Sobre nós</span>&nbsp;</span></h1>
<p class="p1"><span style="font-size: 14pt;">Somos a HomeOn, o marketplace da construção civil e agro, estamos empenhados em conectar consumidores, lojistas e profissionais do setor, criando um ambiente colaborativo e transparente. Queremos simplificar o processo de compra e venda, oferecendo uma ampla variedade de produtos de alta qualidade, com preços competitivos e informações discriminadas, para que nossos clientes possam tomar as melhores decisões para sua obra, em um só lugar, onde estiverem.</span><br><br><br><br><span style="font-size: 18pt;"><strong>Nossa Missão<br></strong></span><br><span style="font-size: 14pt;"><strong><span class="OYPEnA text-decoration-none text-strikethrough-none">Impulsionar a transformação digital do setor e firmar parcerias duradouras com lojistas, clientes e parceiros.</span></strong></span><br><br></p>
</section>
<section class="institutional-container"></section>
</article>`
      },
      paginaEscolhida: 'institucionais'
    }
  },
  computed: {
    conteudoPagina() {
      return this.paginas[this.paginaEscolhida]
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
  max-width: 1170px;
  margin: 0 auto;
  gap: 10px;
}

.nav-paginas {
  display: flex;
  min-width: 281px;
  height: 250px;
}

.paginas {
  width: 100%;
  padding: 25px;
}

select {
  width: 100%;
}

@media (max-width: 1100px) {
  section {
    flex-direction: column;
    padding: 16px;
  }

  .nav-paginas {
    margin: 0 auto;
  }
}
</style>
