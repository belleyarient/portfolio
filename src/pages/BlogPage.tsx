import React from 'react'
import Scroll from '../components/Scroll';
import { Row } from '../types/data';

const content_item: {[key: string]: string} = {
  margin: '40px auto',
  padding: '10px 20px 10px 20px',
  textAlign: 'left',
  backgroundColor: '#eee',
  borderRadius: '5px',
  
};

export const Result:React.FC<Row> = (props) => (
  <tr>
    <th>{props.generation} </th>
    {props.answers.map((answer, i) => (
      <td key={i}>{`${answer * 100}%`}</td>
    ))}
  </tr>
)


const BlogPage = () => {


  return (
    <div className='content'>
        <Scroll delay={1000} origin={'bottom'}>
            <div className="introduce" style={content_item}>
                <h3>このサイトについて</h3>
                <p>このサイトで使っている言語等の技術を紹介します。<br></br>
                フレームワークにReact、ライブラリにThree.js,ScrollReveal.jsなどを使用しています<br></br>
                ソースコードはTypeScriptで書いていますが、実力が未熟なため恩恵は余り感じられていません。<br></br>
                装飾にはCSS,Material UIを一部適用しています。<br></br>
                
                </p>
                <a href='https://ja.reactjs.org/'>React.js</a>
                <br />
                <a href = 'https://threejs.org/'>Three.js</a>
                <br />
                <a href='https://scrollrevealjs.org/'>ScrollReveal.js</a>
                <br />
            </div>
        </Scroll>

        

        <div className="list-with-typescript">

        </div>
    </div>
  )
}

export default BlogPage;
