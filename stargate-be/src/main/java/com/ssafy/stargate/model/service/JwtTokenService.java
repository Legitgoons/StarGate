package com.ssafy.stargate.model.service;

import com.ssafy.stargate.exception.InvalidTokenException;
import com.ssafy.stargate.model.dto.response.JwtResponseDto;

/**
 * JWT 토큰 재생성 인터페이스
 * @author 김도현
 */
public interface JwtTokenService {

    public JwtResponseDto createAccessToken(String refreshToken) throws InvalidTokenException;
}
