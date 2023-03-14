package com.loginregistration.authtest.business.business.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllWorkplacesResponse {
	private int id;
	private String name;
	private int userId;
}