// 프롤로그 페이지 - 간단한 소개 및 튜토리얼
import styled from 'styled-components';

const Container = styled.div``;
const MainIntroduction = styled.div``;
const BookmarkIntroduction = styled.div``;
const CommunityIntroduction = styled.div``;
const RankingIntroduction = styled.div``;
const StartButton = styled.button``;

const Prolog = () => {
  return (
    <Container>
      <MainIntroduction>
        <div>
          <p>냉장고를 부탁해!</p>
          <p>냉장고를 부탁해!를 소개합니다.</p>
        </div>
        <div>
          <img alt='냉장고를 부탁해 사진' src=''></img>
        </div>
      </MainIntroduction>
      <BookmarkIntroduction>
        <div>
          <img alt='북마크 사진' src=''></img>
        </div>
        <div>
          <p>북마크 기능에 대한 소개글</p>
        </div>
      </BookmarkIntroduction>
      <CommunityIntroduction>
        <div>
          <p>커뮤니티 기능에 대한 소개글</p>
        </div>
        <div>
          <img alt='커뮤니티 사진' src=''></img>
        </div>
      </CommunityIntroduction>
      <RankingIntroduction>
        <div>
          <img alt='랭킹 사진' src=''></img>
        </div>
        <div>
          <p>랭킹 기능에 대한 소개글</p>
        </div>
      </RankingIntroduction>
      <StartButton>
        <button>시작하기</button>
      </StartButton>
    </Container>
  );
};

export default Prolog;
