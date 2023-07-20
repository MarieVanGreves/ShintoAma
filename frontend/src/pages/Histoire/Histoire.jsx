import Bio from "../../component/Bio/Bio";
import styles from "./Histoire.module.css";
import Otonashi from "../../assets/images/Otonashi_jinja.png";

export default function Histoire() {
  return (
    <div className={styles.histoireContainer}>
      <div className={styles.deuxCotes}>
        <div className={styles.leftContainer}>
          <div className={styles.topContainer}>
            <h1 className={styles.titre}>LE SHINTÔ</h1>
            <img
              src={Otonashi}
              alt="Temple d'Otonashi"
              className={styles.image}
            />
          </div>
          <div className={styles.containerShinto}>
            <p>
              Le shintoïsme est une religion originaire du Japon qui puise ses
              racines dans les croyances et pratiques ancestrales du peuple
              japonais. C'est une religion polythéiste qui vénère les kami, des
              esprits ou divinités qui résident dans les éléments naturels, les
              ancêtres, les animaux et les objets sacrés. Le shintoïsme met
              l'accent sur l'harmonie avec la nature et la recherche de la
              pureté spirituelle. Les pratiques religieuses du shintoïsme
              comprennent des rituels de purification, des cérémonies
              d'adoration des kami, des prières et des offrandes. Les
              sanctuaires shinto sont des lieux de culte importants où les
              fidèles viennent prier et chercher la bénédiction des kami. Le
              shintoïsme a également une influence importante sur la culture
              japonaise, en particulier dans les domaines de l'art, de
              l'architecture et des festivals. De nombreux événements et
              festivités au Japon sont liés aux croyances shintoïstes, notamment
              les festivals saisonniers et les célébrations pour honorer les
              ancêtres et les divinités protectrices. Au fil du temps, le
              shintoïsme a coexisté et s'est entremêlé avec le bouddhisme au
              Japon, créant ainsi une tradition syncrétique appelée
              shinbutsu-shugo. Malgré cette interaction avec d'autres religions,
              le shintoïsme conserve ses propres caractéristiques et demeure une
              part essentielle de l'identité culturelle du peuple japonais.
              Aujourd'hui, le shintoïsme continue d'être pratiqué par de
              nombreux Japonais, qu'il s'agisse de croyants fervents ou
              simplement de personnes qui participent aux rituels traditionnels.
              Il joue un rôle significatif dans la vie quotidienne et les
              moments importants de la société japonaise, en tant que source de
              spiritualité, de connexion avec la nature et de préservation des
              traditions culturelles ancestrales.
            </p>
            <p>
              Le shintoïsme est une religion profondément ancrée dans la culture
              et l'histoire du Japon. Il n'a pas de fondateur ou de texte sacré
              centralisé, ce qui le distingue des religions monothéistes. Au
              lieu de cela, il repose sur des traditions orales transmises de
              génération en génération, ainsi que sur des textes anciens tels
              que le Kojiki et le Nihon Shoki, qui relatent les mythes et les
              origines du Japon. Le concept central du shintoïsme est l'idée que
              les kami, les divinités et esprits vénérés, sont présents partout
              dans la nature et dans la vie quotidienne. Les sanctuaires shinto
              sont des lieux sacrés où les fidèles peuvent entrer en contact
              avec les kami et leur adresser des prières et des offrandes. Le
              respect de la pureté et de la propreté est essentiel dans les
              pratiques shintoïstes, d'où les rituels de purification fréquents
              avant d'entrer dans les sanctuaires. Le shintoïsme est également
              étroitement lié à la notion de respect envers les ancêtres et les
              esprits des défunts. Les rites funéraires et les cérémonies de
              commémoration sont des aspects importants de cette religion,
              renforçant ainsi les liens entre les vivants et les morts. Au fil
              des siècles, le shintoïsme a évolué et s'est adapté aux
              changements de la société japonaise. Il a également été influencé
              par d'autres religions, en particulier le bouddhisme, qui a été
              introduit au Japon à partir du VIe siècle. Cette coexistence de
              différentes croyances a donné naissance à des pratiques
              syncrétiques et à une culture religieuse unique dans le pays.
              Aujourd'hui, le shintoïsme reste une force importante dans la vie
              spirituelle et culturelle du Japon. Les grands sanctuaires shinto
              attirent de nombreux visiteurs et participants aux festivals et
              célébrations tout au long de l'année. Le shintoïsme est un élément
              essentiel de l'identité nationale japonaise, imprégnant de
              nombreux aspects de la vie quotidienne et des traditions du peuple
              japonais.
            </p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Bio />
        </div>
      </div>
    </div>
  );
}
