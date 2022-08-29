import axios, { setHeader } from '../../api/config';
import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';
import { userNo } from '../../store/user';
import { useRecoilState } from "recoil";

function KakaoLogin() {
    const navigate = useNavigate();
    const [userNum, setUserNum] = useRecoilState(userNo);

    const jsKey = 'c45d6f34c0b90c11bf04e0fd4e4ce43c';
    window.Kakao.init(jsKey);

    const kakaoLoginSuccess = async(account_email, profile) => {
      try {
        const {data} = await axios.post('/user/login', { 
          profile_nickname: profile.nickname,
          account_email,
        })
        const token = data.token; // 응답 데이터 토큰에서 토 큰 얻기
        localStorage.setItem('jwtToken', token); // 로컬스토리지에 저장
        setHeader(token);
        alert('카카오 로그인이 완료되었습니다');
        setUserNum(data.userNo);
        if(data.userExistence) {
          navigate('/main');
        } else {
          navigate('/signup');
        }
      } catch (err) {
        console.log(err)
      }
    }

    const handleLogin = () => {
        window.Kakao.Auth.login({
            scope: "profile_nickname, account_email",
            success: function () {
              window.Kakao.API.request({
                url: "/v2/user/me",
                success: (res) => {
                  const kakao_account = res.kakao_account;
                  const {email, profile} = kakao_account
                  kakaoLoginSuccess(email, profile)
                },
              });
            },
        });
     }

    return (
         <ImgBtn src="img/kakaoBtn.png" onClick={handleLogin} alt="kakaoBtn" />
    )
};

export default KakaoLogin;


const ImgBtn = styled.img`
  margin-top: 10px;
  width: 100px;
  cursor: pointer;
`;