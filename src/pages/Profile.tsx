import { borderRadius, textAlign } from '@mui/system';
import React from 'react'
import Scroll from '../components/Scroll'
import img1 from '../img/IMG_4779.jpg'
import img2 from '../img/IMG_4814.jpg'
import g1 from '../img/g1.jpg'
import g2 from '../img/g2.jpg'
import g3 from '../img/g3.jpg'
import g4 from '../img/g4.jpg'
import g5 from '../img/g5.jpg'
import g6 from '../img/g6.jpg'
import g7 from '../img/g7.jpg'
import g8 from '../img/g8.jpg'
import g9 from '../img/g9.jpg'

const Profile = () => {
    // 各コンテンツのスタイル
    const content_item: {[key: string]: string} = {
        margin: '40px auto',
        padding: '10px 20px 40px 20px',
        textAlign: 'left',
        backgroundColor: '#101010',
        borderRadius: '5px',
        color: 'white',
        
    };
    const img_style: {[key: string]: string} = {
        width: '40%',
        height: '35%',
        // display: 'flex'
        padding: '2px',
        justifyContet: 'center',
        border: '1px solid #fff',
        marginLeft: '20px'
    }
    const garalley_style: {[key: string]: string} = {
        width: '30%',
        height: '30%',
        // display: 'flex'
        // padding: '2px',
        margin: '4px auto',
        justifyContet: 'center',
        // border: '1px solid #fff'
    }

  return (
    <div className='container'>
        <Scroll delay={600} origin={'bottom'}>
            <div className="title">
                <h1>~Profile~</h1>
            </div>
        </Scroll>

        <Scroll delay={800} origin={'bottom'}>
            <div className="introduce" style={content_item}>
                <h3>Who?</h3>
                <p>都内の工科系大学に通っている大学生です。情報科学を専門に勉強しており、中でも感性工学、人間中心設計に興味があります。
                    感性工学に興味を持った理由としては、人間が「なんとなく」、直感的に判断した事象を論理的に分析し、工学分野に応用できることが面白いと思ったことが挙げられます。
                    大学卒業後にしたい仕事は具体的にまだ決まっておりませんが、様々な悩みを持った誰もが生きやすくなる社会をITの分野から実現したいと思っており、実現に貢献できるような仕事に就くことを目指しています。</p>

                <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '50px',}}>
                    <div style={{width: '50%', fontSize: '12px',}} className="career-text">
                        <p>こちらは最近撮影した出身高校の近くです。埼玉の普通科高校に通っていました。<br></br>レイクタウンが最寄り駅にあります。<br></br>平日のこの辺りは人が少なく、景色も綺麗で落ち着きます。</p>
                        
                    </div>
                    <img src={img2} alt="picture" style={img_style}/>
                </div>

                <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '20px',}} className="career-text">
                    <div style={{width: '50%', fontSize: '12px'}}>
                        <p>現在は足立区の大学<br></br>某川の土手から撮影した写真になります。</p>
                    </div>
                    <img src={img1} alt="picture" style={img_style}/>
                </div>

            </div>
        </Scroll>
        <Scroll delay={800} origin={'bottom'}>
            <div className="introduce" style={content_item}>
            <h3>Programing Skills?</h3>
                <ul style={{paddingLeft:'10px'}}>
                    <li style={{listStyle: 'none', marginTop:'20px'}}>-Java<br></br>（アルゴリズムやGUIプログラミング、Webサービス等）</li>
                    <li style={{listStyle: 'none', marginTop:'20px'}}>-Processing<br></br>（インタラクティブなアニメーション制作）</li>
                    <li style={{listStyle: 'none', marginTop:'20px'}}>-C++（画像処理）</li>
                    <li style={{listStyle: 'none', marginTop:'20px'}}>-R（統計解析の授業で少し使用）</li>
                    <li style={{listStyle: 'none', marginTop:'20px'}}>-アセンブラ</li>
                    <li style={{listStyle: 'none', marginTop:'20px'}}>-TypeScript（CGモデリング）</li>
                </ul>
            </div>
        </Scroll>
        <Scroll delay={800} origin={'bottom'}>
            <div className="introduce" style={content_item}>
            <h3>Like?</h3>
                <ul style={{paddingLeft:'10px'}}>
                    <li style={{listStyle: 'none', marginTop:'20px'}}>-漫画 <br></br>名探偵コナン, ONE PIECE, SPY×FAMILY, Hunter×Hunter等。ジャンプ読んでます。</li>
                    <li style={{listStyle: 'none', marginTop:'20px'}}>-アニメ<br></br>ポケモン、ゆるキャン△とか見てます。</li>
                    <li style={{listStyle: 'none', marginTop:'20px'}}>-ゲーム<br></br>持っているソフトはSwitchのゲームが多いですが、最近は原神をよくやります。</li>
                </ul>
                <br></br>
                <p>現実離れしたフィクションの作品が好きで、漫画やアニメだけでなくドラマなどもたまに見ます。</p>
            </div>
        </Scroll>

        <Scroll delay={800} origin={'bottom'}>
            <div className="introduce" style={content_item}>
            <h3>Disike?</h3>
                <ul style={{paddingLeft:'10px'}}>
                    <li style={{listStyle: 'none', marginTop:'20px'}}>-早寝早起き <br></br>寝つきと目覚めが悪いため苦手です。</li>
                    <li style={{listStyle: 'none', marginTop:'20px'}}>-梅干し<br></br>口がつらくなります。</li>
                    <li style={{listStyle: 'none', marginTop:'20px'}}>-ミント<br></br>梅干し同様です。</li>
                </ul>
                <br></br>
                <p></p>
            </div>
        </Scroll>

        <Scroll delay={800} origin={'bottom'}>
            <div className="introduce" style={content_item}>
                <h3>Garalley</h3>
                <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '50px',}}>
                    
                    <img src={g1} alt="picture" style={garalley_style}/>
                    <img src={g2} alt="picture" style={garalley_style}/>
                    <img src={g3} alt="picture" style={garalley_style}/>
                    <img src={g4} alt="picture" style={garalley_style}/>
                    <img src={g5} alt="picture" style={garalley_style}/>
                    <img src={g6} alt="picture" style={garalley_style}/>
                    <img src={g7} alt="picture" style={garalley_style}/>
                    <img src={g8} alt="picture" style={garalley_style}/>
                    <img src={g9} alt="picture" style={garalley_style}/>
                </div>

                <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '20px',}}>
                    
                </div>

            </div>
        </Scroll>
    </div>
  )
}

export default Profile