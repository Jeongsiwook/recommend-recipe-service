import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Nav from '../components/Nav';

const datas = [
  {
    cooking: '된장찌개',
    good: '43',
    ingredients: '차돌박이, 대파, 양파, 애호박, 표고버섯, 된장, 고춧가루',
    recipe:
      '애호박과 두부는 적당히 썰어서 준비해 놓는다. 멸치국물을 끓이고 된장과 고추장을 풀어준다. 풀어지면 미리 썰어놓은 두부와 감자, 애호박을 먼저 넣는다. 보글보글 끓어오르기 시작하면 다시다 1큰술, 고춧가루 1작은술, 소고기나 바지락, 풋고추 썰은 것을 넣고 끓여준다. 바지락이 입을 벌리거나 소고기가 거의 다 익으면 약 3분간 더 끓여준 뒤 송송 썬 파를 올려 상에 낸다.',
    content: '너무 맛있어요.',
    writer: 'Tom@Tomboy.com',
    date: '2022-06-04',
  },
  {
    cooking: '갈치조림',
    good: '90',
    ingredients: '돼지고기, 고추가루, 고추기름, 식용유, 김치, 두부, 대파, 물',
    recipe:
      '대파를 어슷 썰고, 두부를 가로로 반으로 자르고 다시 세로로 1.5~2cm로 자른다. 풍미를 위해 고추기름과 식용유 1:1비율로 넣고, 돼지고기도 냄비에 넣는다. 스텐 냄비가 아니라면 늘어붙을 때 까지 볶는 것만 생략하고 맛술과 김치를 잘라 타지않게 볶는다. 참고로 냄비는 두께가 두꺼운 것이 좋다. 두께가 얇은 양은 냄비를 쓴다면 불 조절이 어려워 타기 쉽다. 바닥에 돼지고기가 늘어 붙기 시작한다면 중불로 줄여 물을 붓고 눌어붙은 것을 긁어낸다. 적당히 바닥에 늘어붙은 고기는 김치찌개의 풍미를 더욱 올려준다. 그 다음 맛술을 넣고 적당히 볶다가 물이 다사라지고 붉은 기름만 남는다면 김치를 가위로 잘라 넣고 다시 오랫동안 타지않게 불 조절을 하며 볶는다. 김치볶음을 만든다 생각하며 오래 볶은 다음, 두부와 대파를 넣고 물을 재료를 다 덮을 만큼 넣고, 고운 고추가루 한 숫가락을 넣고 강불로 끓이다가 물이 끓으면 중약불로 낮추어 졸인다. 졸인 다음 김치찌개가 싱겁다면 소금을 넣어 간을 맞춘다.',
    content: '너무 맛있어요.',
    writer: 'Jisoo@blackpink.com',
    date: '2022-06-03',
  },
  {
    cooking: '부대찌개',
    good: '13',
    ingredients: '햄, 소시지, 두부, 김치, 대파, 양파, 고추, 치즈',
    recipe:
      '마트 등에서 파는 부대찌개용 양념을 하나 구입한다(한 봉당 천원~2천원대 가격에 구할 수 있다). 양념봉지 뒷면에 있는 물의 양만큼 냄비에 물을 넣고 양념을 넣고 끓인다. 햄과 소시지, 두부, 김치를 넉넉히 깔고 대파와 채썬 양파, 매운 고추(선택사항)를 적당히 얹어놓고 육수를 부어 끓인다. 다 끓어갈 즈음에서 슬라이스 치즈 1/2장을 국물에 녹인다(선택사항). 베이크드 빈즈가 있다면 넣으면 좋으나, 보통 구비해두질 않으니 대신 토마토 케첩을 1인분당 반 스푼씩 넣고 된장을 약간 넣는다. 베이크드 빈즈 = 설탕+토마토+동물의 지방+향신료+강낭콩 이기 때문에, 동물의 지방과 향신료는 소세지,햄에서 더 넣고, 설탕과 토마토를 케첩으로 대체하고 콩을 된장으로 대체하는 것이다. 이러면 베이크드 빈즈가 들어간 것과 똑같은 조합이 되므로 우리가 아는 부대찌개 맛이 거의 비슷하게 난다.',
    content: '너무 맛있어요.',
    writer: 'Jim@carry.com',
    date: '2022-06-05',
  },
];

const Community = () => {
  const [data, setData] = useState(datas);
  const [filterValue, setFilterValue] = useState('new');

  const handleSelectFilter1 = (e) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    // TO DO: 서버에서 데이터 가져오기
  }, [filterValue, data]);

  return (
    <Container>
      <Nav />
      <Div1>
        <Div2>
          <Filter1 name="sort" onChange={handleSelectFilter1}>
            <option value="new" selected="selected">
              최신순
            </option>
            <option value="thumb">추천순</option>
          </Filter1>
        </Div2>
      </Div1>
      <PostDiv>
        {filterValue === 'thumb'
          ? data
              .sort((a, b) => Number(b.good) - Number(a.good))
              .map((d) => (
                <Post>
                  <p
                    style={{
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                      margin: '1rem',
                    }}
                  >
                    {d.cooking}
                  </p>
                  <p>👍 {d.good}</p>
                  <p>{d.ingredients}</p>
                  <p>{d.recipe}</p>
                  <p>{d.content}</p>
                  <p>{d.writer}</p>
                  <p>{d.date}</p>
                </Post>
              ))
          : data
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((d) => (
                <Post>
                  <p
                    style={{
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                      margin: '1rem',
                    }}
                  >
                    {d.cooking}
                  </p>
                  <p>👍 {d.good}</p>
                  <p>{d.ingredients}</p>
                  <p>{d.recipe}</p>
                  <p>{d.content}</p>
                  <p>{d.writer}</p>
                  <p>{d.date}</p>
                </Post>
              ))}
      </PostDiv>
      <Filter2>
        <Selector>
          <option value="cooking">요리명</option>
          <option value="writer">작성자</option>
        </Selector>
        <Input></Input>
        <Btn>검색</Btn>
      </Filter2>
    </Container>
  );
};

export default Community;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
const Div1 = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
`;
const Div2 = styled.div``;
const Filter1 = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
  margin: 1rem;
`;
const PostDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
const Post = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  margin: 1rem;

  & p:not(:first-of-type) {
    font-size: 1rem;
    margin: 1rem;
  }
`;
const Filter2 = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
`;
const Input = styled.input`
  display: flex;
  justify-content: flex-start;
  width: 20rem;
  height: 2rem;
  margin: 1rem;
`;
const Selector = styled.select`
  display: flex;
  justify-content: flex-start;
  width: 5rem;
  height: 2rem;
`;
const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2rem;
`;
