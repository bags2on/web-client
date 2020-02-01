package graphql

import (
	"context"
) // THIS CODE IS A STARTING POINT ONLY. IT WILL NOT BE UPDATED WITH SCHEMA CHANGES.

type Resolver struct{}

func (r *Resolver) Query() QueryResolver {
	return &queryResolver{r}
}

type queryResolver struct{ *Resolver }

func (r *queryResolver) User(ctx context.Context) (*User, error) {
	mockUser := User{
		ID:       "001",
		Nickname: "Vlad",
		Email:    "vlad@gmail.com",
		Role:     1,
		Langs: []*Lang{
			{
				Name: "JavaScript",
				Ext:  ".js",
			},
			{
				Name: "Golang",
				Ext:  ".go",
			},
		},
	}

	return &mockUser, nil
}
